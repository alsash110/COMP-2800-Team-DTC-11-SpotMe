<template>
    <v-container>
        <v-card elevation="2" shaped>
            <Caroursel/>
            <v-card-text><b>Arnald</b><span> 21</span></v-card-text>
        </v-card>
    </v-container>
</template>

<script>
    import Caroursel from "../components/Caroursel"
    export default {
        name: "FindMatchesProfileCard",
        components: {
            Caroursel
        }
    }
</script>