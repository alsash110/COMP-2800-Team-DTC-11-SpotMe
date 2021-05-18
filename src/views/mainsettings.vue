<template>
  <div>
    <div id="topheader">
      <FindMatchesHeader />
    </div>
    <div id="profile-pic">
        <button>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Images%2Fuserprofile.png?alt=media&token=70417eff-1a9c-449d-a576-0553b7e863ed"
            alt=""
          />
        </button>
    </div>
    <div id="lower-btns">
      <!-- <button><img src="image/profileicon.png" alt="" /></button>
      <button><img src="image/profileicon.png" alt="" /></button>
      <button><img src="image/profileicon.png" alt="" /></button> -->
      <MainSettingsBottomBtns />
    </div>
    <div class="Bottom-Section">
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
  </div>
</template>

<script>
import FindMatchesHeader from "../components/FindMatchesHeader";
import MainSettingsBottomBtns from "../components/MainSettingsBottomBtns";
export default {
  name: "MainSettingsPage",
  components: {
    FindMatchesHeader,
    MainSettingsBottomBtns,
  },
  data() {
    return {
      items: [
        {
          src:
            "https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Images%2FGirls%20Running.png?alt=media&token=b9e7d7a5-a3db-401e-bff7-601abc6bcb14",
        },
        {
          src:
            "https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Images%2Fworkout-group.jpg?alt=media&token=507e68d6-6d68-4182-bd6b-4d29675f0221",
        },
        {
          src:
            "https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Images%2Ffriendworkingout.jpg?alt=media&token=745af7f8-fefa-4924-93db-54465c9ceac1",
        },
      ],
      links: ["About Us", "Learn", "Support"],
    };
  },
};
</script>

<style scoped>
    img {
        margin-left: 35vw;
       
    }
</style>
