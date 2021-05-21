<template>
  <div>
    <div id="topheader">
      <FindMatchesHeader />
    </div>
    <div id="profile-pic">
      <v-row justify="center" no-gutters>
        <button>
          <!-- <img
            src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Images%2Fuserprofile.png?alt=media&token=70417eff-1a9c-449d-a576-0553b7e863ed"
            alt=""
          /> -->
          <v-img lazy-src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Images%2Fuserprofile.png?alt=media&token=70417eff-1a9c-449d-a576-0553b7e863ed" src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Images%2Fuserprofile.png?alt=media&token=70417eff-1a9c-449d-a576-0553b7e863ed"></v-img>
        </button>
      </v-row>
    </div>
    <div id="lower-btns">
      <!-- <button><img src="image/profileicon.png" alt="" /></button>
      <button><img src="image/profileicon.png" alt="" /></button>
      <button><img src="image/profileicon.png" alt="" /></button> -->
      <MainSettingsBottomBtns />
    </div>
    <v-divider></v-divider>
    <div class="Bottom-Section">
      <div class="footer">
        <v-footer color="primary lighten-3" padless fixed>
          <v-row justify="center" no-gutters>
            <img class="static" src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/staticboy.png?alt=media&token=c7954c21-08c0-43b9-bc54-ff2d4210c067"><img class="active" src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/ezgif.com-gif-maker.gif?alt=media&token=c30a3166-5132-4157-b9c7-7d9a0a412b30">   
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
  </div>
</template>

<script>
import FindMatchesHeader from "../components/FindMatchesHeader";
import MainSettingsBottomBtns from "../components/MainSettingsBottomBtns";
import SettingsFooter from "../components/SettingsFooter";
export default {
  name: "MainSettingsPage",
  components: {
    FindMatchesHeader,
    MainSettingsBottomBtns,
    SettingsFooter
  },
};
</script>

<style scoped>
.static {
  position:absolute;
  background: white;
  max-height: 15vw;
}

.active {
  max-height: 15vw;
}

.static:hover {
  opacity:0;
}

</style>
