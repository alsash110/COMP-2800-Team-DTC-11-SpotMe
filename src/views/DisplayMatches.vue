<template>
    <div>
        <FindMatchesHeader/>
        <FindMatchesProfileCard :users="users"/>
        <FindMatchesFooter @approve-user="onApproveClick" @reject-user="onRejectClick"/>
        
    </div>
</template>

<script>
    import FindMatchesHeader from '../components/FindMatchesHeader'
    import FindMatchesProfileCard from '../components/FindMatchesProfileCard'
    import FindMatchesFooter from '../components/FindMatchesFooter'
    import { db } from '@/main';
    import { auth } from '@/main';
    export default {
        name: "DisplayMatches",
        components: {
            FindMatchesHeader,
            FindMatchesProfileCard,
            FindMatchesFooter
        },
        methods: {
           onApproveClick() {
               auth.onAuthStateChanged(loggedInUser => {
                   db.collection('users').doc(loggedInUser.uid)
                    .get()
                    .then( doc => {
                        this.loggedInUserMatches = doc.data().matched;
                        this.loggedInUserMatches.push(this.usersIds[0]);
                        console.log(this.loggedInUserMatches);

                        db.collection('users').doc(loggedInUser.uid)
                        .update({
                            "matched": this.loggedInUserMatches
                        })
                        .then( _=> {
                            this.checkIfMatched(loggedInUser.uid, this.usersIds[0]);
                            this.users.shift();
                            this.usersIds.shift();
                            console.log(this.users);
                            //If the list of user is not empty, display only the first user in the newly shifted list
                            if (this.users.length !== 0) {
                                this.users[0].show = true;   
                            }
                        })
                        .catch( err => console.log(err))
                    })
                    .catch(err => console.log(err))
               })
            },
            onRejectClick() {
                auth.onAuthStateChanged(loggedInUser => {
                   db.collection('users').doc(loggedInUser.uid)
                    .get()
                    .then( doc => {
                        this.loggedInUserRejections = doc.data().rejected;
                        this.loggedInUserRejections.push(this.usersIds[0]);
                        console.log(this.loggedInUserRejections);

                        db.collection('users').doc(loggedInUser.uid)
                        .update({
                            "rejected": this.loggedInUserRejections
                        })
                        .then( _=> {
                            this.users.shift();
                            this.usersIds.shift();
                            console.log(this.users);
                            //If the list of user is not empty, display only the first user in the newly shifted list
                            if (this.users.length !== 0) {
                                this.users[0].show = true;   
                            }
                        })
                        .catch( err => console.log(err))
                    })
                    .catch(err => console.log(err))
               })
            },
            checkIfMatched(idOfUser, partnerId){
                db.collection('users').doc(partnerId).get().then(doc => {
                    if (doc.data().matched.includes(idOfUser)){
                        db.collection('chat-logs').add({
                            hidden: false,
                            messages: [],
                            users: [idOfUser, partnerId]
                        })
                    }
                })
            },
            getUsers() {
                auth.onAuthStateChanged(loggedInUser => {
                    var usersData = [];
                    var usersIds = [];

                    //Get logged in user's matching preferences
                    db.collection('users').doc(loggedInUser.uid).get()
                    .then(doc => {
                        this.loggedInUserPreferences = doc.data().preferences;
                        // for(const preference in preferencesRef) {
                        //     if(preferencesRef[preference]){
                        //         this.loggedInUserPreferences.push(preference)
                        //     }
                        // }
                    })
                    .catch(err => console.log(err))


                    //Display users that match logged in user preferences
                    db.collection('users').get()
                    .then(snap => {
                        snap.forEach(user => {
                            if(loggedInUser.uid !== user.id) {
                                let displayUser = false;
                                db.collection('users').doc(loggedInUser.uid)
                                .get()
                                .then( doc => {
                                    let matchedRef = doc.data().matched;
                                    let rejectedRef = doc.data().rejected;
                                    let foundUser = false;

                                    //check logged in users preferences vs current snapshot of all users preferences
                                    for(const preference in this.loggedInUserPreferences) {
                                        if(this.loggedInUserPreferences[preference]) {
                                            if(this.loggedInUserPreferences[preference] === user.data().preferences[preference]) {
                                                displayUser = true;
                                            }
                                        }
                                    }

                                    matchedRef.forEach( matchedId => {
                                        if(user.id === matchedId) {
                                            foundUser = true;
                                        }
                                    });

                                    rejectedRef.forEach(rejectedId => {
                                        if(user.id === rejectedId) {
                                            foundUser = true;
                                        }
                                    });

                                    if((!foundUser) && displayUser) {
                                        usersIds.push(user.id);
                                        usersData.push(user.data());
                                        this.users = usersData;
                                        this.usersIds = usersIds;
                                        if(this.users.length !== 0) {
                                            this.users[0].show = true;
                                        }
                                    }
                                })
                                .catch(err => console.log(err))
                            }
                        });
                    })
                    .catch(err => console.log(err))
                })
            }
        },
        data() {
            return {
                users: [],
                usersIds: [],
                loggedInUserMatches: [],
                loggedInUserRejections: [],
                loggedInUserPreferences: []
            }
        },
        created() {
            this.getUsers();
        }
    }
</script>