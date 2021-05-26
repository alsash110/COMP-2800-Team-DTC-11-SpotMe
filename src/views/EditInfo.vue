<template>
  <div class="about">
    <div class="navbar">
      <v-toolbar color="blue" prominent>
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to bottom left, #59ABF8, #84BDF2"
          ></v-img>
        </template>
        <h1 style="color: white">Workout Preferences</h1>
        <v-spacer></v-spacer>
        <v-btn class="nav-btn" color="primary" rounded to="/mainsettings"
          >Done</v-btn
        >
      </v-toolbar>
    </div>
    <ShowAndOverwriteInfo :userInfo="userInfo"/>
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
</template>

<script>
import DevProfile from "../components/DevProfile";
import ShowAndOverwriteInfo from "../components/ShowAndOverwriteInfo"
import { auth } from '@/main';
import { db } from '@/main';
export default {
  name: "editinfo",
  components: {
    ShowAndOverwriteInfo
  },
  methods: {
    //Enter methods here
    getLoggedInUser() {
      auth.onAuthStateChanged(loggedInUser => {
        db.collection('users').doc(loggedInUser.uid)
        .get()
        .then( doc => {
          this.userInfo = doc.data();
        })
        .catch(err => console.log(err))
      })
    },
  },
  data() {
    return {
      userInfo: {}
    }
  },
  created(){
    //Call methods that are used upon creation of life cycle
    this.getLoggedInUser();
  }
};
</script>

<style>
.navbar h1 {
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 1.8em;
}

.navbar h1 {
  margin-left: 40px;
  margin-top: 30px;
}

.nav-btn {
  margin-top: 35px;
}

.navbar-img {
  margin-top: 15px;
}

.Mid-Section {
  background-color: rgba(196, 196, 196, 0.3);
}

.Mid-Section h1 {
  font-size: 15px;
  font-weight: normal;
  padding: 3vh;
}

.Mid-Section img {
  margin: auto;
}

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

.tagGroup {
    display: inline-flex;
    margin: 1px;
}
.tag {
    color: white;
}
</style>