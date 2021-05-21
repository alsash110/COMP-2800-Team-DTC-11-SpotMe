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
                    db.collection('users').get()
                    .then(snap => {
                        snap.forEach(user => {
                            if(loggedInUser.uid !== user.id) {
                                db.collection('users').doc(loggedInUser.uid)
                                .get()
                                .then( doc => {
                                    let matchedRef = doc.data().matched;
                                    let rejectedRef = doc.data().rejected;
                                    let foundUser = false;
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
                                    if(!foundUser) {
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
                loggedInUserRejections: []
            }
        },
        created() {
            this.getUsers();
        }
    }
</script>