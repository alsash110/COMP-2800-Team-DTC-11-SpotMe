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
            <v-btn class="nav-btn" color="primary" rounded to="/mainsettings">Done</v-btn>
           </v-toolbar>   
         </div>
           <div class="Mid-Section">
            <div class="usersettings">
                <h1>Info Settings</h1>
                <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <template v-slot:default="{ open }">
          <v-row no-gutters>
            <v-col cols="4">
              Phone Number
            </v-col>
            <v-col
              cols="8"
              class="text--secondary"
            >
              <v-fade-transition leave-absolute>
                <span
                  v-if="open"
                  key="0"
                >
                </span>
                <span
                  v-else
                  key="1"
                >
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-text-field
          v-model="trip.name"
          placeholder="Change your phone number!"
        ></v-text-field>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <!-- <v-col
            cols="12"
            sm="6"
          >
            <v-slider
              v-model="form.age"
              :rules="rules.age"
              color="orange"
              label="Age"
              hint="Be honest"
              min="1"
              max="100"
              thumb-label
            ></v-slider>
          </v-col> -->

       <v-expansion-panel>
      <v-expansion-panel-header>
        <template v-slot:default="{ open }">
          <v-row no-gutters>
            <v-col cols="4">
                Email
            </v-col>
            <v-col
              cols="8"
              class="text--secondary"
            >
              <v-fade-transition leave-absolute>
                <span
                  v-if="open"
                  key="0"
                >
                </span>
                <span
                  v-else
                  key="1"
                >
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-text-field
          v-model="trip.name"
          placeholder="Change your email!"
        ></v-text-field>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
            </div>
        </div>
    <div class="footer">
          <v-footer color="primary lighten-3" padless fixed>
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
    data: () => ({
      date: null,
      trip: {
        name: '',
        location: null,
        start: null,
        end: null,
        age: null
      },
    }),
    // return: {
    //     form: Object.assign({}, defaultForm),
    //     rules: {
    //       age: [
    //         val => val < 10 || `I don't believe you!`,
    //       ]
    //     }
    // }
    
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