<template>
    <div>
        <FindMatchesHeader/>
        <FindMatchesProfileCard :users="users"/>
        <FindMatchesFooter @approve-user="onClick" @reject-user="onClick"/>
        
    </div>
</template>

<script>
    import FindMatchesHeader from '../components/FindMatchesHeader'
    import FindMatchesProfileCard from '../components/FindMatchesProfileCard'
    import FindMatchesFooter from '../components/FindMatchesFooter'
    export default {
        name: "DisplayMatches",
        components: {
            FindMatchesHeader,
            FindMatchesProfileCard,
            FindMatchesFooter
        },
        methods: {
            onClick() {
                // When a button component is clicked
                console.log(this.users);
                //Remove the first user from the list out of the list
                this.users.shift();
                console.log(this.users);
                //If the list of user is not empty, display only the first user in the list
                if (this.users.length !== 0) {
                    this.users[0].show = true;   
                }
            }
        },
        data() {
            return {
                users: {}
            }
        },
        created() {
            // Mock Data
            this.users = [
                    {
                        id: 1,
                        name: "Arnald",
                        age: "21",
                        show: true,
                        quote: "YEEEEAH",
                        tags: [
                            "chest",
                            "full body",
                            "legs"
                        ],
                        photos: [
                            {
                                src: 'https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/FindMatches%2FmockData%2FArnald%2F10-Best-Arms-Olympia-Arnold-Schwarzenegar.jpg?alt=media&token=95fd7fdc-56a6-4350-b1f9-7e0dfe9d459c',
                            },
                            {
                                src: 'https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/FindMatches%2FmockData%2FArnald%2Farnold-schwarzenegger-free-home-bodyweight-workout-1584944227.jpg?alt=media&token=0d8c6fd9-847d-45b9-9d6b-fcac3aa15dc4',
                            },
                            {
                                src: 'https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/FindMatches%2FmockData%2FArnald%2Fedc7bc99bf51e187972a37b7d52189b8.jpg?alt=media&token=1289a368-1026-4bb9-8322-3394bc7d401e',
                            },
                            {
                                src: 'https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/FindMatches%2FmockData%2FArnald%2Fpumping-iron-1611788679.jpg?alt=media&token=417cbd66-90c2-4483-8477-d66eac25293f',
                            },
                        ]
                    },
                    {
                        id: 2,
                        name: "Karen",
                        age: "30",
                        show: false,
                        quote: "Make America great again!",
                        tags: [
                            "cardio",
                            "legs",
                            "glutes"
                        ],
                        photos: [
                            {
                                src: "https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/FindMatches%2FmockData%2FKaren%2Fkaren1.jpg?alt=media&token=e70142f0-0a19-407d-9111-92503db86296"
                            },
                            {
                                src: "https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/FindMatches%2FmockData%2FKaren%2Fkaren2.jpg?alt=media&token=c1ea7cbd-af4e-41fb-8ef5-dcfc7865d093"
                            },
                            {
                                src: "https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/FindMatches%2FmockData%2FKaren%2Fkaren3.jpg?alt=media&token=67727eb1-de41-4d13-81c5-5e8b33dacda0"
                            },
                            {
                                src: "https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/FindMatches%2FmockData%2FKaren%2Fkaren4.jpg?alt=media&token=7db48ec6-8444-4d8e-a9e1-7765c094e5e8"
                            }
                        ]
                    }
            ]
        }
    }
</script>