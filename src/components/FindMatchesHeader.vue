<template>
    <v-container>
        <v-toolbar flat>
            <v-spacer></v-spacer>
            <v-btn
             color="primary"
             elevation="2"
             icon
             plain
             raised
             outlined
             to="/displaymatches"
            >
                <v-icon>mdi-account-supervisor</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
             color="primary"
             elevation="2"
             icon
             plain
             raised
             outlined
             to="/mainsettings"
            >
                <v-icon>mdi-home</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
             color="primary"
             elevation="2"
             icon
             plain
             raised
             outlined
             @click="goToChat"
            >
                <v-icon>mdi-chat</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
             color="primary"
             elevation="2"
            @click="logout" 
             icon
             plain
             raised
             outlined rounded><v-icon>mdi-logout</v-icon></v-btn>
            <v-spacer></v-spacer>
        </v-toolbar>
    </v-container>
</template>

<script>
import firebase from "firebase/app"
    export default {
        name: "FindMatchesHeader",

        methods: {
            goToChat: function (event) {
                this.$router.push('chat');
            }, 
            logout(){
                 firebase.auth().signOut();
                 this.$router.replace({ name: "Home" });
    }
        }
    }
</script>