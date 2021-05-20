<template>
    <div>
        <!-- <v-footer height="80px" class="blue-rectangle" color="#97CAFA" fixed>
        </v-footer> -->
        <div class="footer">
        <v-footer color="primary lighten-3" padless fixed>
          <v-row justify="center" no-gutters>
            <v-btn
              v-for="link in links"
              :key="link"
              color="white"
              text
              rounded
              class="my-2"
            >
              {{ link }}
            </v-btn>
            <v-col
              class="primary lighten-3 py-4 text-center white--text"
              cols="12"
            >
              {{ new Date().getFullYear() }} — <strong>SpotMe</strong>
            </v-col>
          </v-row>
        </v-footer>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

    .text-center{
        text-align: center;
    }
    /* .blue-rectangle{
        height: 3em;
        background-color: #97CAFA;
        border-radius: 9px;

    } */
</style>