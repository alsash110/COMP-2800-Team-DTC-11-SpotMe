import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyBfmIAGUvMVLnGM_FV_dthp-z7p7XWAopo",
  authDomain: "group11-spot-me.firebaseapp.com",
  projectId: "group11-spot-me",
  storageBucket: "group11-spot-me.appspot.com",
  messagingSenderId: "1023138880515",
  appId: "1:1023138880515:web:c5674a532cd90b41a30236"
})

export const db = firebase.firestore()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
