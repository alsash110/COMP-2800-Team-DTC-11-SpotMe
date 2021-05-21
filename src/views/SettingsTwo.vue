<template>
  <div class="about">
             <div class="navbar">
           <v-toolbar 
           color="blue" 
           prominent>
           <template v-slot:img="{ props }">
             <v-img v-bind="props" gradient="to bottom left, #59ABF8, #84BDF2"></v-img>
           </template>
            <h1 style="color:white">Settings</h1>
            <v-spacer></v-spacer>
            <v-btn class="nav-btn" color="primary" rounded to="/mainsettings">Done</v-btn>
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
  <div class="Location">
    <h1>Location</h1>
                      <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <template v-slot:default="{ open }">
          <v-row no-gutters>
            <v-col cols="4">
              Address
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
          placeholder="Change your address!"
        ></v-text-field>
      </v-expansion-panel-content>
    </v-expansion-panel>

       <v-expansion-panel>
      <v-expansion-panel-header>
        <template v-slot:default="{ open }">
          <v-row no-gutters>
            <v-col cols="4">
                Maximum Distance
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
        <!-- Possible slider change -->
        <!-- <v-slider
                v-model="ex1.val"
                :color="ex1.color"
                :label="ex1.label"
              ></v-slider> -->
        <v-text-field
          v-model="trip.name"
          placeholder="How far would you like to meet?"
        ></v-text-field>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
  </div>
            </div>
            <div class="Privacy">
                <h1>Privacy</h1>
                  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list
          three-line
          subheader
        >
          <v-subheader>User Controls</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Content filtering</v-list-item-title>
              <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Password</v-list-item-title>
              <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list
          three-line
          subheader
        >
          <v-subheader>General</v-subheader>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Notifications</v-list-item-title>
              <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="sound"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Sound</v-list-item-title>
              <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="widgets"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Auto-add widgets</v-list-item-title>
              <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
            </div>
        </div>
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
  import SettingsInput from '../components/SettingsInput'
  export default {
    data: () => ({
      date: null,
      trip: {
        name: '',
        location: null,
        start: null,
        end: null,
      },
    }),
    
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