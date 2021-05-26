<template>
    <div>
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
                @input="setPhoneNumber"
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
                @input="setEmail"
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
                @input="setPassword"
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
                    <v-col cols="4"> Address </v-col>
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
                  v-model="address"
                  :placeholder="this.userInfo.address"
                  @input="setAddress"
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
                  :placeholder="this.userInfo.max_distance"
                  @input="setMaxDistance"
                ></v-text-field>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
    </div>
</template>

<script>
import firebase from "firebase/app";
import { db } from "@/main";
import { auth } from "@main"
import "firebase/firestore";
export default {
    name: "ShowAndRewriteSettingsTwo",
    props: {
        userInfo: Object
    },
    methods: {
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
      setPhoneNumber() {
        auth.onAuthStateChanged(loggedInUser => {
          db.collection('users').doc(loggedInUser.uid)
          .update({
            phone_number: this.phone_number
          })
          .catch(err => console.log(err))
        })
      },
      setEmail() {
        auth.onAuthStateChanged(loggedInUser => {
          db.collection('users').doc(loggedInUser.uid)
          .update({
            email: this.email
          })
          .catch(err => console.log(err))
        })
      },
      setPassword() {
        auth.onAuthStateChanged(loggedInUser => {
          db.collection('users').doc(loggedInUser.uid)
          .update({
            password: this.password
          })
          .catch(err => console.log(err))
        })
      },
      setAddress() {
        auth.onAuthStateChanged(loggedInUser => {
          db.collection('users').doc(loggedInUser.uid)
          .update({
            address: this.address
          })
          .catch(err => console.log(err))
        })
      },
      setMaxDistance() {
        auth.onAuthStateChanged(loggedInUser => {
          db.collection('users').doc(loggedInUser.uid)
          .update({
            max_distance: this.max_distance
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
      address: "",
      max_distance: "",
      phoneRules: [
        v => !!v || 'Phone number is required',
        v => v.length == 10 || 'Phone number must be exactly 10 digits long',
        v => !v == /^\d+$/ || 'Phone number must only contain digits',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must be at least 6 characters long'
      ]
    }
  },
  created() {
    this.getLoggedInUser();
  }
}
</script>