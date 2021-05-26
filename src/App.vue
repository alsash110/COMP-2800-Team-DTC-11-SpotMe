<template>
  <v-app class='lato-font'>
    <!-- <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar> -->

    <v-main class="lato-font">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
@font-face {
  font-family: "Lato";
  src: local("Lato"),
   url(./fonts/Lato/Lato-Regular.ttf) format("truetype");
}
.lato-font {
  font-family: "Lato";
}
</style>