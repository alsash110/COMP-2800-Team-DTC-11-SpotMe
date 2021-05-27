<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" integrity="sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ=" crossorigin="anonymous" />
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
          <v-img lazy-src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Images%2Fuserprofile.png?alt=media&token=70417eff-1a9c-449d-a576-0553b7e863ed"
           :src=profileImg
           max-height="130"
           max-width="130"></v-img>
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
              <template>
              <ShareNetwork
        v-for="network in networks"
        :network="network.network"
        :key="network.network"
        :style="{backgroundColor: network.color}"
        :url="sharing.url"
        :title="sharing.title"
        :description="sharing.description"
        :quote="sharing.quote"
        :hashtags="sharing.hashtags"
        :twitterUser="sharing.twitterUser"
      >
        <i :class="network.icon"></i>
        <span>{{ network.name }}</span>
      </ShareNetwork>
              </template>
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
import { db } from "@/main";
import firebase from "../main";
export default {
  name: "MainSettingsPage",
  components: {
    FindMatchesHeader,
    MainSettingsBottomBtns,
    SettingsFooter
  },
  data() {
    return {
      sharing: {
        url: 'group11-spot-me.web.app',
        title: 'Start working out with me on SpotMe!',
        description: 'SpotMe is the app where you can find people to work out at the gym with!',
        quote: 'Start working out with me on SpotMe!',
        hashtags: 'workout, excercise, fitness',
      },
      networks: [
        { network: 'facebook', name: 'Facebook', icon: 'fab fah fa-lg fa-facebook-f', color: '#1877f2' },
        { network: 'twitter', name: 'Twitter', icon: 'fab fah fa-lg fa-twitter', color: '#1da1f2' },
        ],
      profileImg: "https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Images%2Fuserprofile.png?alt=media&token=70417eff-1a9c-449d-a576-0553b7e863ed"
    }
  },
  methods:{
    async getuserimg() {
      console.log("ri")
        var user = firebase.auth().currentUser;
        if (user) {
            var doc = await db.collection("users").doc(user.uid).get()
            this.profileImg = doc.data().photos[0];
        } else {
        }
    },
  },
  created() {
    this.getuserimg()
    console.log(this.profileImg)
  }
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
h1 {
    text-align: center;
    margin: 50px 0 80px;
  }
  .share-network-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1000px;
    margin: auto;
  }
  a[class^="share-network-"] {
    flex: none;
    color: #FFFFFF;
    background-color: #333;
    border-radius: 3px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 10px 10px 0;
  }
  a[class^="share-network-"] .fah {
    background-color: rgba(0, 0, 0, 0.2);
    padding: 10px;
    flex: 0 1 auto;
  }
  a[class^="share-network-"] span {
    text-decoration: none;
    padding: 0 10px;
    flex: 1 1 0%;
    font-weight: 500;
  }
  a{
    text-decoration: none;
  }
</style>
