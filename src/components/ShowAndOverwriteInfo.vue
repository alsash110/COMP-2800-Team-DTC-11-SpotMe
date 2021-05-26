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
              v-model="name"
              :placeholder="userInfo.name"
              @input="setName"
            >{{userInfo.name}}</v-text-field>
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
              v-model="age"
              :placeholder="userInfo.age"
              @input="setAge"
            >{{userInfo.age}}</v-text-field>
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
              v-model="sex"
              :placeholder="userInfo.sex"
              @input="setSex"
            >{{userInfo.sex}}</v-text-field>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <div>
        <v-textarea
          v-model="quote"
          auto-grow
          filled
          color="blue"
          label="Bio"
          rows="1"
          :placeholder="userInfo.quote"
          @input="setQuote"
        ></v-textarea>
      </div>
      <v-container>
          <label>Prefered workouts:</label>
          <v-select
          rounded
          v-model="preferences"
          :items='["cardio", "ppl", "hypertrophy","balance","gains","cuts","hiit","yoga"]'
          :menu-props="{ maxHeight: '400' }"
          label="Select"
          multiple
          persistent-hint
          @change="setPreferences"
        ></v-select>
      </v-container>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { db } from "@/main";
import { auth } from "@/main";
import "firebase/firestore";
export default {
    name: "ShowAndOverwriteInfo",
    props: {
      userInfo: Object
    },
    methods: {
      setName() {
        auth.onAuthStateChanged(loggedInUser => {
          db.collection('users').doc(loggedInUser.uid)
          .update({
            name: this.name
          })
          .catch(err => console.log(err))
        })
      },
      setAge() {
        auth.onAuthStateChanged(loggedInUser => {
          db.collection('users').doc(loggedInUser.uid)
          .update({
            age: this.age
          })
          .catch(err => console.log(err))
        })
      },
      setSex() {
        auth.onAuthStateChanged(loggedInUser => {
          db.collection('users').doc(loggedInUser.uid)
          .update({
            sex: this.sex
          })
          .catch(err => console.log(err))
        })
      },
      setQuote() {
        auth.onAuthStateChanged(loggedInUser => {
          db.collection('users').doc(loggedInUser.uid)
          .update({
            quote: this.quote
          })
          .catch(err => console.log(err))
        })
      },
      setPreferences() {
        auth.onAuthStateChanged(loggedInUser => {
          db.collection('users').doc(loggedInUser.uid)
          .update({
            preferences: this.arrayToMap(this.preferences),
            rejected: []
          })
          .catch(err => console.log(err))
        })
      },
      arrayToMap(array){
        let newMap = {"cardio": false, "ppl":false, "hypertrophy":false,"balance":false,"gains":false, "cuts": false,"hiit": false, "yoga": false};
        array.forEach(element => {
          newMap[element] = !newMap[element];
        });
        console.log(newMap);
        return newMap;
      },
    },
    data() {
      return {
        name: "",
        age: "",
        sex: "",
        quote: "",
        preferences: []
      }
    }
};
</script>

<style scoped>
</style>