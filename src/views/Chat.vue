<template>
  <v-app class="lato-font">
    <FindMatchesHeader></FindMatchesHeader>
    <!-- <v-container v-on:scroll="onScroll" ref="chatlistContainer"> -->
    <v-container>
      <v-row no-gutters>
        <v-col v-for="chat in allChats" :key="chat.messages.length" cols="12">
            <ChatRow :chat={chat}></ChatRow>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import ChatRow from "../components/ChatRow";
import Footer from "../components/FooterJY";
import FindMatchesHeader from "../components/FindMatchesHeader";
import { db } from "@/main";
import firebase from "../main";

export default {
  name: "Chat",

  components: {
    FindMatchesHeader,
    ChatRow,
    Footer,
  },
  data() {
    return {
      allChats: [],
      userid:"",
    };
  },

  computed: {
    chats() {
      return [
        { name: "Justin", message: "Hey how you doing" },
        { name: "Justin1", message: "Hey how you doing" },
        { name: "Justin2", message: "Hey how you doing" },
        { name: "Justin3", message: "Hey how you doing" },
        { name: "Justin4", message: "Hey how you doing" },
        { name: "Justin5", message: "Hey how you doing" },
      ];
    },
  },
  methods: {
    openchat: function (event) {
      this.$router.push("message/123123123");
    },
    async getUserId() {
        var user = firebase.auth().currentUser;
        if (user) {
            console.log("logged in");
            this.userid = user.uid;
        } else {
            console.log('Not logged in');
        }
    },
    async getChats() {
        // this.getUserId();
    //   var user = await firebase.auth().currentUser;
    //   var userid;
    //   if (user) {
    //       console.log("logged in");
    //     userid = user.uid;
    //   } else {
    //     console.log('Not logged in');
    //   }
      let snapChatLog = db
        .collection("chat-logs")
        .where("users", "array-contains", this.$store.state.user.uid)
        .get();
      let listochats = [];
      await snapChatLog
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            let partneruid = doc
              .data()
              .users.filter((e) => e !== this.$store.state.user.uid)[0];
            listochats.push({
              partnerId: partneruid,
              messages: doc.data().messages,
            });
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
        this.allChats = listochats;
    },
  },
  created(){
      this.$store.commit('setUid');
      // let listochats =[];
      db.collection("chat-logs").where("users", "array-contains", this.$store.state.user.uid)
      .onSnapshot(snap => {
        snap.forEach((doc) => {
            let partneruid = doc
              .data()
              .users.filter((e) => e !== this.$store.state.user.uid)[0];
            console.log(partneruid);
            if (this.allChats.find(chat => chat.partnerId === partneruid)){
              this.allChats.find(chat => chat.partnerId === partneruid).messages = doc.data().messages
              console.log(this.allChats);
            } else if(!doc.data().hidden) {
              this.allChats.push({
                partnerId: partneruid,
                messages: doc.data().messages,
              });
            }
          });
      })
  },
  mounted() {
      // this.getChats();
  },
};
</script>

<style scoped>
.lato-font {
  font-family: "Lato";
}
.grid-container {
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: 2em 2em;
  gap: 0px 0px;
  grid-template-areas:
    "profile-pic name"
    "profile-pic message";
}

.profile-pic {
  grid-area: profile-pic;
}

.name {
  grid-area: name;
  margin-top: 0.5em;
  font-size: 18px;
  font-weight: 550;
}

.message {
  grid-area: message;
  font-size: 14px;
}

.profile-img {
  border-radius: 50%;
  height: 4em;
  width: 4em;
  display: block;
  margin: auto;
  margin-top: 0.5em;
}

.chat-card {
  margin-top: 0.5em;
}

.bottom-rectangle {
  position: absolute;
  width: 101%;
  height: 10%;
  left: -2px;
  bottom: -10px;

  background: #97cafa;
  border-radius: 9px;
}
</style>