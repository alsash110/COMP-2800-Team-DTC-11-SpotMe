<template>
  <div class="about">
             <div class="navbar">
           <v-toolbar 
           color="blue" 
           prominent>
           <template v-slot:img="{ props }">
             <v-img v-bind="props" gradient="to bottom left, #59ABF8, #84BDF2"></v-img>
           </template>
            <img class="navbar-img" width="50px" src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Experienced.png?alt=media&token=1a0ed8da-bb5e-4ce8-85a1-0b74d1a0d0cb" alt="">
            <h1 style="color:white">Edit Info</h1>
            <v-spacer></v-spacer>
            <v-btn class="nav-btn" color="primary" rounded>Done</v-btn>
           </v-toolbar>   
         </div>
           <div class="Mid-Section">
            <div class="usersettings">
                <h1>Info Settings</h1>
                <v-list>
                    <v-subheader class="outline">
                        Name
                    </v-subheader>
                    <v-divider></v-divider>
                    <v-subheader class="outline">
                        Age
                    </v-subheader>
                    <v-divider></v-divider>
                    <v-subheader class="outline">
                        Gender
                    </v-subheader>
                    <v-divider></v-divider>
                    <v-subheader class="outline">
                        Bio
                    </v-subheader>
                    <v-divider></v-divider>
                    <v-subheader class="outline">
                        Interest Tags
                    </v-subheader>
                </v-list>
            </div>
        </div>
    <div class="footer">
          <v-footer color="primary lighten-3" padless>
            <v-row justify="center" no-gutters>
              <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">
                {{ link }}
              </v-btn>
            <v-col class="primary lighten-3 py-4 text-center white--text" cols="12">
              {{ new Date().getFullYear() }} — <strong>SpotMe</strong>
            </v-col>
            </v-row>
          </v-footer>
        </div>
        </div>
</template>

<script>
  import DevProfile from '../components/DevProfile'
  export default {
    name: "About",
    components: {
      DevProfile
    },
    data () {
      return {
      links: [
        'About Us',
        'Learn',
        'Support',
      ]
    }
    }
  }
</script>

<style>
.navbar h1 {
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
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
</style>