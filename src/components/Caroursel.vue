<template>
  <v-container>
    <v-carousel
      hide-delimiter-background
      show-arrows-on-hover
    >
      <div v-if="photos.length > 0">
      <v-carousel-item
        v-for="(photo,i) in photos"
        :key="i"
        :src="photo"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
      </div>
      <div v-else>
      <v-carousel-item
        src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/FindMatches%2FloadingImages%2Fbeanies.png?alt=media&token=027b4cb8-e0f9-49f1-b634-192b71354f13"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
      </div>
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