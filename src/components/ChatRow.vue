<template>
  <div>
    <v-card
      class="mx-auto chat-card"
      max-width="90vw"
      height="5em"
      outlined
      color="transparent"
      :to="'/message/'+this.partnerId"
    >
      <div class="grid-container">
        <div class="profile-pic">
          <img
            class="profile-img"
            :src=img
          />
        </div>
        <div class="name">
          {{ name }}
        </div>
        <div class="message">
          {{ messageToDisplay }}
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import { db } from "@/main";

export default {
  name: "ChatRow",
  props: {
    chat: Object,
  },
  methods: {
    async getCardInfo() {
        let partnerId = this.$props.chat.chat.partnerId;
        this.partnerId = partnerId;
        let userRef = await db
            .collection("users-chat-test")
            .where("uid", "==", partnerId)
            .get();
        userRef.forEach(doc => {
            this.name = doc.data().name;
            this.img = doc.data().photo[0];
        })
        let sortedMessages = this.$props.chat.chat.messages.slice().sort((a,b) => b.time - a.time);
        this.messageToDisplay = sortedMessages[0].message;
    },
  },
  data() {
    return {
      name: "unkown",
      messageToDisplay: "You have matched!",
      partnerId: "unknown",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRiccAiYldtk2kGPXAtwbN4LmiWVic890njSJhVXB92OG_TNzaIwCLGyDv4A8DDoqwdmA&usqp=CAU"
    };
  },
  created() {
    this.getCardInfo();
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
</style>