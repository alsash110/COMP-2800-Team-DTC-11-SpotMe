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
        </v-toolbar>
    </v-container>
</template>

<script>
    export default {
        name: "FindMatchesHeader",

        methods: {
            goToChat: function (event) {
                this.$router.push('chat');
            }
        }
    }
</script>