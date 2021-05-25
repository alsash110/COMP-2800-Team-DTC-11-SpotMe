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
        <h1 style="color: white">Edit Info</h1>
        <v-spacer></v-spacer>
        <v-btn class="nav-btn" color="primary" rounded to="/mainsettings"
          >Done</v-btn
        >
      </v-toolbar>
    </div>
    <!-- <div class="Mid-Section">
      <div class="usersettings">
        <h1>Info Settings</h1>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <template v-slot:default="{ open }">
                <v-row no-gutters>
                  <v-col cols="4"> Name </v-col>
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
                v-model="trip.name"
                placeholder="What is your preferred name?"
              ></v-text-field>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>
              <template v-slot:default="{ open }">
                <v-row no-gutters>
                  <v-col cols="4"> Age </v-col>
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
                v-model="trip.name"
                placeholder="How old are you?"
              ></v-text-field>
              <div>

              Slider
               <v-slider
                v-model="ex1.val"
                :color="ex1.color"
                :label="ex1.label"
              ></v-slider> 

              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>
              <template v-slot:default="{ open }">
                <v-row no-gutters>
                  <v-col cols="4"> Gender </v-col>
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
                v-model="trip.name"
                placeholder="What do you identify yourself as?"
              ></v-text-field>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

        <div>
          <v-textarea
        auto-grow
        filled
        color="blue"
        label="Bio"
        rows="1"
      ></v-textarea>
        </div>

        <div>
          <v-textarea
        auto-grow
        filled
        color="blue"
        label="Interest Tags"
        rows="1"
      ></v-textarea>
        </div>

      </div>
    </div> -->
    <ShowAndOverwriteInfo/>
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
export default {
  data: () => ({
    name: editinfo,
    date: null,
    components: {
      ShowAndOverwriteInfo
    },
    trip: {
      name: "",
      location: null,
      start: null,
      end: null,
    },
    // return: {
    //   ex1: { label: 'color', val: 25, color: 'orange darken-3' },
    // }
  }),
};
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