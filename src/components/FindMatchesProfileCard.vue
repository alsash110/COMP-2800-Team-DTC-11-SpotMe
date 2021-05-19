<template>
    <v-container>
        <div v-if="users.length !== 0">
            <div
             v-for="user in users" 
             :key="user.id"
            >
                <v-card
                 elevation="2" 
                 shaped 
                 v-if="user.show"
                >
                    <Caroursel :photos="user.photos"/>
                    <v-row>
                        <v-col
                         v-for="n in 2" 
                         :key="n"
                        >
                            <v-card-text 
                            v-if="n === 1"
                            >
                                <b>{{user.name}}</b><span> {{user.age}}</span><br/>
                                {{user.quote}}
                            </v-card-text>

                            <div
                             v-else class="tagGroup" 
                             v-for="preference in user.tags" 
                             :key="preference"
                            >
                                <v-chip
                                 color="blue"
                                >
                                    <span class="tag">{{preference}}</span>
                                </v-chip>
                            </div>
                        </v-col>
                    </v-row>
                </v-card>
            </div>
        </div>
        <!-- If data list of users is empty, show loading user page-->
        <div
         v-else
        >
            <v-card
             elevation="2" 
             shaped
            >
                <div 
                 class="loading"
                >
                    <v-img
                     src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/FindMatches%2FloadingImages%2Fbeanies.png?alt=media&token=027b4cb8-e0f9-49f1-b634-192b71354f13"
                    >
                    </v-img>
                    <v-card-text>
                        <b>Loading more users..</b>
                    </v-card-text>
                </div>
            </v-card>
        </div>
    </v-container>
</template>

<script>
    import Caroursel from "../components/Caroursel"
    export default {
        name: "FindMatchesProfileCard",
        props: {
            users: Array
        },
        components: {
            Caroursel
        }
    }
</script>

<style scoped>
    .tagGroup {
        display: inline-flex;
        margin: 1px;
    }
    .tag {
        color: white;
    }
</style>