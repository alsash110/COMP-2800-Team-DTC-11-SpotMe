<template>
  <v-container fluid class="lato-font">
    <!-- <v-card  
    outlined color="transparent" -->
    <div class="chat-name-bar">
      <v-btn color="black" dark icon class="vertical-center" :to="'/chat'">
        <v-icon size="42">mdi-chevron-left</v-icon>
      </v-btn>
      <div class="photo-and-name">
        <v-img class="profile-img" :src="partnerImg"></v-img>
        <p class="chat-name">{{ partnerName }}</p>
      </div>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark icon v-bind="attrs" v-on="on">
            <v-icon x-large> mdi-dots-horizontal </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in menuItem" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <MessageBubble
      :user="userName"
      :userId="userId"
      :messages="chatMessages"
      :partner="partnerName"
      :partnerId="partnerId"
    ></MessageBubble>
    <div class="text-input-box">
      <input
        class="message-text-box"
        type="text"
        placeholder="message"
        v-on:keyup.enter="sendMessage"
        v-model="content"
      />
      <v-btn color="black" primary icon @click="sendMessage">
        <v-icon> mdi-send </v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import { db } from "@/main";
import firebase from "../main";
import MessageBubble from "../components/MessageBubble";
export default {
  data() {
    return {
      content: "",
      chatMessages: [],
      currentRef: {},
      loading: false,
      totalChatHeight: 0,
      menuItem: [{ title: "report" }],
      partnerId: "",
      userId: "",
      userName:"",
      partnerName:"",
      partnerImg:"",
      chatId:"",
    };
  },
  props: ["id"],
  components: {
    MessageBubble,
  },
  computed: {},
  methods: {
    goBack: function (event) {
      this.$router.push({ name: "Chat" });
    },
    async sendMessage() {
      if (this.content !== "") {
        const chatRef = db.collection('chat-logs').doc(this.chatId);
        const unionRes = await chatRef.update({
          messages: firebase.firestore.FieldValue
          .arrayUnion({
            message: this.content,
            sender: this.userId,
            time: Date.now(),
          })
        })
        this.content = "";
        this.getMessages();
      }
    },
    async getPartnerId() {
      let uri = window.location.href.split("/");
      this.partnerId = uri[uri.length - 1];
      // let userRef = db
      db
        .collection("users")
        .doc(this.partnerId)
        .get().then((doc) => {
          if (doc.exists) {
            console.log(doc.data());
            this.partnerName = doc.data().name;
            if (doc.data().photos.length > 0){
              this.partnerImg = doc.data().photos[0];
              }
          }
        });
      // await userRef.then((querySnapshot) => {
      //   querySnapshot.forEach((doc) => {
      //     this.partnerName = doc.data().name;
      //     this.partnerImg = doc.data().photo[0];
      //   })
      // })
    },
    async getCurrentUserId() {
      var user = firebase.auth().currentUser;
      if (user) {
        this.userId = user.uid;
      } else {
        console.log('Not Logged In')
      }
      // let userRef = db
      db
        .collection("users")
        .doc(this.userId)
        .get().then((doc) =>{
          if (doc.exists){
            this.userName = doc.data().name;
          }
        });
      // await userRef.then((querySnapshot) => {
      //   querySnapshot.forEach((doc) => {
      //     this.userName = doc.data().name;
      //   })
      // })
    },
    async getMessages() {
      let snapChatLog = db
        .collection("chat-logs")
        .where("users", "array-contains", this.userId)
        .get();
      await snapChatLog
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (doc.data().users.includes(this.partnerId)){
              this.chatMessages = doc.data().messages.slice().sort((a,b) => a.time - b.time);
              this.chatId = doc.id;
            }
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
  },
  created() {
    this.getPartnerId();
    this.getCurrentUserId();
    this.getMessages();
  },
};
</script>

<style scoped>
.lato-font {
  font-family: "Lato";
}
.profile-img {
  border-radius: 50%;
  height: 65px;
  max-width: 65px;
  /* margin-left: 60px; */
}
.chat-name-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
}
.photo-and-name {
  display: flex;
  align-items: center;
}
.back-button {
  margin-top: 1.5em;
}
.chat-name {
  margin-top: 15px;
  margin-left: 0.2em;
  font-size: 24px;
  font-weight: 550;
}
.text-input-box {
  position: fixed;
  bottom: 5px;
  display: flex;
  justify-content: space-between;
}
.message-text-box {
  width: 80vw;
}
</style>