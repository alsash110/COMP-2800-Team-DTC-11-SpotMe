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

        <v-content>
    <!--- pick-up screen height so we can center vertically -->
          <v-container fill-height>
            <!--- vertical and horizontal alignment -->
            <v-layout align-center justify-center>
              <v-flex xs6>
                <!--- v-flex is centered now, but we need to center button inside v-flex -->
                <div class="text-xs-center">
                    <h1 style="color: white">Settings</h1>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-content>

        <!-- <v-layout align-center justify-center> 
          <h1 style="color: white">Settings</h1>
        </v-layout>
        <v-spacer></v-spacer> -->
        
      </v-toolbar>
    </div>
    <div class="Mid-Section">
      <div class="usersettings">
        <h1>User Settings</h1>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <template v-slot:default="{ open }">
                <v-row no-gutters>
                  <v-col cols="4"> Phone Number </v-col>
                  <v-col cols="8" class="text--secondary">
                    <v-fade-transition leave-absolute>
                      <span v-if="open" key="0"> </span>
                      <span v-else key="1"> </span>
                    </v-fade-transition>
                  </v-col>
                </v-row>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-text-field
                v-model="phone_number"
                :rules="phoneRules"
                :placeholder="this.userInfo.phone_number"

              ></v-text-field>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>
              <template v-slot:default="{ open }">
                <v-row no-gutters>
                  <v-col cols="4"> Email </v-col>
                  <v-col cols="8" class="text--secondary">
                    <v-fade-transition leave-absolute>
                      <span v-if="open" key="0"> </span>
                      <span v-else key="1"> </span>
                    </v-fade-transition>
                  </v-col>
                </v-row>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                :placeholder="this.userInfo.email"
                
              ></v-text-field>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>
              <template v-slot:default="{ open }">
                <v-row no-gutters>
                  <v-col cols="4"> Password </v-col>
                  <v-col cols="8" class="text--secondary">
                    <v-fade-transition leave-absolute>
                      <span v-if="open" key="0"> </span>
                      <span v-else key="1"> </span>
                    </v-fade-transition>
                  </v-col>
                </v-row>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                :placeholder="this.userInfo.password"
                
              ></v-text-field>
            </v-expansion-panel-content>
          </v-expansion-panel>

        </v-expansion-panels>

        <!-- Subheader Location Sevices -->
        <div class="Location">
          <h1>Location</h1>
          
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>
                <template v-slot:default="{ open }">
                  <v-row no-gutters>
                    <v-col cols="4"> City </v-col>
                    <v-col cols="8" class="text--secondary">
                      <v-fade-transition leave-absolute>
                        <span v-if="open" key="0"> </span>
                        <span v-else key="1"> </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-text-field
                  v-model="city"
                  :placeholder="this.userInfo.city"
                  
                ></v-text-field>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>
                <template v-slot:default="{ open }">
                  <v-row no-gutters>
                    <v-col cols="4"> Maximum Distance </v-col>
                    <v-col cols="8" class="text--secondary">
                      <v-fade-transition leave-absolute>
                        <span v-if="open" key="0"> </span>
                        <span v-else key="1"> </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-text-field
                  v-model="max_distance"
                  :rules="maxDistanceRules"
                  :placeholder="this.userInfo.max_distance"
                  
                ></v-text-field>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>

        
          <v-container class="btn-container">
            <v-spacer></v-spacer>
                <div>
                    <v-btn id="nav-btn" 
                      color="primary" 
                      
                      @click="submit"
                    >Done</v-btn>
                </div>
              <v-spacer></v-spacer>
          </v-container>
      </div>
      
    </div>
    <div class="footer">
      <v-footer color="primary lighten-3" padless fixed>
        <v-row justify="center" no-gutters>
          <img
            class="static"
            src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/staticboy.png?alt=media&token=c7954c21-08c0-43b9-bc54-ff2d4210c067"
          /><img
            class="active"
            src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/ezgif.com-gif-maker.gif?alt=media&token=c30a3166-5132-4157-b9c7-7d9a0a412b30"
          />
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
import SettingsInput from "../components/SettingsInput";
import { auth } from '@/main';
import { db } from '@/main';
export default {
  name: "settings",
  methods: {
    getLoggedInUser() {
      auth.onAuthStateChanged(loggedInUser => {
        db.collection('users').doc(loggedInUser.uid)
        .get()
        .then( doc => {
          this.userInfo = doc.data();
          this.phone_number = doc.data().phone_number,
          this.email = doc.data().email,
          this.password = doc.data().password,
          this.city = doc.data().city,
          this.max_distance = doc.data().max_distance
        })
        .catch(err => console.log(err))
      })
    },
      // setPhoneNumber() {
      //   auth.onAuthStateChanged(loggedInUser => {
      //     db.collection('users').doc(loggedInUser.uid)
      //     .update({
      //       phone_number: this.phone_number
      //     })
      //     .catch(err => console.log(err))
      //   })
      // },
      // setEmail() {
      //   auth.onAuthStateChanged(loggedInUser => {
      //     db.collection('users').doc(loggedInUser.uid)
      //     .update({
      //       email: this.email
      //     })
      //     .catch(err => console.log(err))
      //   })
      // },
      // setPassword() {
      //   auth.onAuthStateChanged(loggedInUser => {
      //     db.collection('users').doc(loggedInUser.uid)
      //     .update({
      //       password: this.password
      //     })
      //     .catch(err => console.log(err))
      //   })
      // },
      // setCity() {
      //   auth.onAuthStateChanged(loggedInUser => {
      //     db.collection('users').doc(loggedInUser.uid)
      //     .update({
      //       city: this.city
      //     })
      //     .catch(err => console.log(err))
      //   })
      // },
      // setMaxDistance() {
      //   auth.onAuthStateChanged(loggedInUser => {
      //     db.collection('users').doc(loggedInUser.uid)
      //     .update({
      //       max_distance: this.max_distance
      //     })
      //     .catch(err => console.log(err))
      //   })
      // },

      //when called update fields to db
      submit(){
      auth.onAuthStateChanged(loggedInUser => {
          db.collection('users').doc(loggedInUser.uid)
          .update({
            phone_number: this.phone_number,
            email: this.email,
            password: this.password,
            city: this.city,
            max_distance: this.max_distance,
          })
          //redirects to main profile settings page
          .then(_=> {
            this.$router.push('/mainsettings');
          })
          .catch(err => console.log(err))
        })
      },

  },
  data() {
    return {
      userInfo: {},
      phone_number: "",
      email: "",
      password: "",
      city: "",
      max_distance: "",
      phoneRules: [
        v => !!v || 'Phone number is required',
        v => /^[0-9]+$/.test(v) || 'Phone number must only contain digits',
        v => v.length == 10 || 'Phone number must be exactly 10 digits long',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must be at least 6 characters long'
      ],
      maxDistanceRules: [
        v => !!v || 'Maximum Distance is required',
        v => /^[0-9]+$/.test(v) || 'Phone number must only contain digits',
      ],
    }
  },
  created() {
    this.getLoggedInUser();
  }
};
</script>

<style scoped>
.navbar h1 {
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  font-size: 1.8em;
}

.navbar h1 {
  /* margin-left: 0; */
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
  position: absolute;
  background: white;
  max-height: 15vw;
}

.active {
  max-height: 15vw;
}

.static:hover {
  opacity: 0;
}

.btn-container {
  display: flex;
} 
</style>