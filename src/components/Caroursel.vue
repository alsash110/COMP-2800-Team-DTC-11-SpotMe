<template>
  <v-container>
    <v-carousel
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(photo,i) in photos"
        :key="i"
        :src="photo"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
  export default {
    name: "Caroursel",
    props: {
      photos: Array
    }
  }
</script>