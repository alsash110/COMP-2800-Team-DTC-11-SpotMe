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
             to="/settings"
            >
                <v-icon>mdi-cog</v-icon>
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
                <v-icon>mdi-camera</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
             color="primary"
             elevation="2"
             icon
             plain
             raised
             outlined
             to="/editinfo"
            >
                <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
        </v-toolbar>
    </v-container>
</template>

<script>
    export default {
        name: "MainSettingsBottomBtns"
    }
</script>