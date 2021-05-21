import Vue from 'vue';
import Vuex from 'vuex';
import firebase from "../main";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      uid: ""
    },
  },
  mutations: {
    setUid(state){
      firebase.auth().onAuthStateChanged(function (user){
        if(user){
          state.user.uid = user.uid;
        }
        else{
          console.log("not signed in");
        }
      });
    }
  },
  actions: {
  },
  modules: {
  }
})
