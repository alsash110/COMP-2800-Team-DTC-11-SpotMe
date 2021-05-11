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
                <v-icon>mdi-rewind</v-icon>
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
                <v-icon>mdi-dumbbell</v-icon>
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
                <v-icon>mdi-close-thick</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
        </v-toolbar>
    </v-container>
</template>

<script>
    export default {
        name: "FindMatchesFooter"
    }
</script>