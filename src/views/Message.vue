<template>
  <v-container fluid class="lato-font">
    <!-- <v-card  
    outlined color="transparent" -->
    <div class="chat-name-bar">
      <v-btn
            color="black"
            dark
            icon
            @click="goBack"
            class="vertical-center"
        >
        <v-icon size="42">mdi-chevron-left</v-icon>
      </v-btn>
      <div class="photo-and-name">
        <v-img class="profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRiccAiYldtk2kGPXAtwbN4LmiWVic890njSJhVXB92OG_TNzaIwCLGyDv4A8DDoqwdmA&usqp=CAU"></v-img>
        <p class="chat-name">{{name}}</p>
      </div>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon x-large>
            mdi-dots-horizontal
            </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in menuItem"
            :key="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <MessageBubble user="Justin" :messages=chatMessages partner="Donald"></MessageBubble>
    <div class="text-input-box">
      <input class="message-text-box" type="text" placeholder="message" v-on:keyup.enter="sendMessage" v-model="content">
      <v-btn
        color="black"
        primary
        icon
        @click="sendMessage"
      >
        <v-icon>
          mdi-send
        </v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
  import MessageBubble from '../components/MessageBubble'
  export default {
    data () {
      return {
        content: '',
        chatMessages: [{user: "Donald",
                        content: "hello man"},
                        {user: "Donald",
                        content: "hello man1"},
                        {user: "Donald",
                        content: "hello man2"},
                        {user: "Donald",
                        content: "hello man3"}
                        ],
        emojiPanel: false,
        currentRef: {},
        loading: false,
        totalChatHeight: 0,
        name: "Donald",
        menuItem: [ { title: 'report' },],
      }
    },
    props: [
      'id'
    ],
    components: {
      MessageBubble,
    },
    computed: {
    },
    methods: {
      goBack: function (event) {
                this.$router.push({name: 'Chat'});
            },
      sendMessage () {
        if (this.content !== ''){
          this.chatMessages.push({user: "Justin", content: this.content})
          this.content = ""
        }
      }
    }

  }
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
  .back-button{
    margin-top: 1.5em;
  }
  .chat-name{
    margin-top: 15px;
    margin-left: 0.2em;
    font-size: 24px;
    font-weight: 550;
    
  }
  .text-input-box{
    position: fixed;
    bottom:5px;
    display: flex;
    justify-content: space-between;
  }
  .message-text-box{
    width: 80vw;
  }
</style>