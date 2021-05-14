<template>
    <v-app class="lato-font">
        <!-- <v-container v-on:scroll="onScroll" ref="chatlistContainer"> -->
        <v-container>
            <v-row no-gutters>
            <v-col v-for="chat in chats" :key="chat.name" cols="12">
                <v-card class="mx-auto chat-card" max-width="90vw" height="5em" outlined color="transparent"
                @click="openchat"
                >
                    
                        <div class="grid-container">
                            <div class="profile-pic">
                                <img class='profile-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRiccAiYldtk2kGPXAtwbN4LmiWVic890njSJhVXB92OG_TNzaIwCLGyDv4A8DDoqwdmA&usqp=CAU">
                            </div>
                            <div class="name">
                                {{chat.name}}
                            </div>
                            <div class="message">
                                {{chat.message}}
                            </div>
                        </div>
                    
                </v-card>
            </v-col>
            </v-row>
        </v-container>
        <Footer/>
        
    </v-app>
</template>

<script>
    import ChatRow from '../components/ChatRow'
    import Footer from '../components/FooterJY'
    
    export default {
        name: 'Chat',

        components: {
            ChatRow,
            Footer
        },

        computed : {
            chats() {
                return [{name: 'Justin', message: 'Hey how you doing'},
                        {name: 'Justin1', message: 'Hey how you doing'},
                        {name: 'Justin2', message: 'Hey how you doing'},
                        {name: 'Justin3', message: 'Hey how you doing'},
                        {name: 'Justin4', message: 'Hey how you doing'},
                        {name: 'Justin5', message: 'Hey how you doing'},
                
                ]
            }
        },
        methods: {
            openchat: function (event) {
                this.$router.push('message/123123123');
            }
  }
    }
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

    .profile-pic { grid-area: profile-pic; }

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

        background: #97CAFA;
        border-radius: 9px;
    }
    
</style>