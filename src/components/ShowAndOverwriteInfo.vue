<template>
  <div class="Mid-Section">
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
              {{name}}
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
              {{age}}
            ></v-text-field>
            <!-- <v-date-picker rounded v-model="age" :rules="ageRules"  :max="new Date(2020,5,20).toISOString().substr(0, 10)"></v-date-picker> -->
            <div>
              <!-- <v-slider
                v-model="ex1.val"
                :color="ex1.color"
                :label="ex1.label"
              ></v-slider> -->
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            <template v-slot:default="{ open }">
              <v-row no-gutters>
                <v-col cols="4"> Sex </v-col>
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
            {{sex}}
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
          {{about}}
        ></v-textarea>
      </div>

      <div>
        <v-textarea
          auto-grow
          filled
          color="blue"
          label="Interest Tags"
          rows="1"
          {{preferences}}
        ></v-textarea>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { db } from "@/main";
import "firebase/firestore";
export default {
    name: "ShowAndOverwriteInfo",
    methods: {
        // updateInfo() {
        //     firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then( (userCred) => {
        //    db.collection("users").doc(userCred.user.uid).set({
        //      name: this.name,
        //      sex: this.sex,
        //      age: this.getAge(this.age),
        //      matched: [],
        //      rejected: [],
        //      preferences: this.arrayToMap(this.preferences),
        //      quote: this.about
        //         })
        // }
        
    },
    data: () => ({
    valid: false,
    email: "",
    phone: "",
    name: "",
    age: "2000-12-31",
    sex: "Male",
    preferences: [],
    about: ''
  }),
};
</script>

<style scoped>
</style>