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
                                <b>{{user.name}}</b><span> {{ getAge(user.age)}}</span><br/>
                                {{user.quote}}
                            </v-card-text>

                            <div
                             v-else class="tagGroup" 
                             v-for="(value, key) in user.preferences" 
                             :key="key"
                            >
                                <v-chip
                                 color="blue"
                                 v-if="value === true"
                                >
                                    <span class="tag">{{key}}</span>
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
                        <b>Uh oh, there doesn't seem to be anymore buddies registered..</b>
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
        },
        methods:{
            getAge(str) {
      let yob = str.split("-");
      let currentYear = new Date().getFullYear();
      let currentMonth = new Date().getMonth() + 1;
      let currentDay = new Date().getDate();
      let user_age = currentYear - Number(yob[0]) - 1;
      if (currentMonth < Number(yob[1])) {
        return String(user_age);
      } else if (currentMonth > Number(yob[1])) {
        return String(user_age + 1);
      } else {
        if (currentDay >= yob[2]) {
          return String(user_age + 1);
        } else {
          return String(user_age);
        }
      }
    },
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