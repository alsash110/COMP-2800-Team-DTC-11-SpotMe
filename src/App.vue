<template>
  <v-app>
    <v-main>
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
</style>