import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Chat from '../views/Chat.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Message from '../views/Message.vue'
import DisplayMatches from '../views/DisplayMatches.vue'
import mainsettings from '../views/mainsettings.vue'
import Settings from '../views/SettingsTwo.vue'
import EditInfo from '../views/EditInfo.vue'
import AddPhotos from '../views/AddPhotos.vue'


import firebase from "firebase/app"



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
   meta: {requiresAuth: true}
  },
  {
    path: '/message/:id',
    name: 'Message',
    component: Message,
    props: true,
   meta: {requiresAuth: true}
  },
  {
    path: '/displayMatches',
    name: 'DisplayMatches',
    component: DisplayMatches,
   meta: {requiresAuth: true}
  },
  {
    path: '/mainsettings',
    name: 'mainsettings',
    component: mainsettings,
  meta: {requiresAuth: true}
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
   meta: {requiresAuth: true}
  },
  {
    path: '/editinfo',
    name: 'editinfo',
    component: EditInfo
  },
  {
    path: '/addphotos',
    name: 'AddPhotos',
    component: AddPhotos
  }
]

const router = new VueRouter({
  routes
})

console.log("we're here. router meesage");


//console.log(firebase.auth().currentUser)

// THIS BREAKS EVERYTHING
// router.beforeEach((to, from, next) => {
//   if (!from.meta){
//     console.log("I don't require auth")
//     next()
//   }
//   else{
//     if (to.name !== 'Login' && !isAuthenticated ) next({ name: 'Login' })
//     else next()
//   }
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (firebase.auth().currentUser) {
      next();
    } else {
      alert('You must be logged in to see this page');
      next({
        path: '/',
      });
    }
  } else {
    next();
  }
});

  // const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  // const isAuthenticated = firenase.auth().currentUser;
  // console.log("isauthenticated", isAuthenticated);
  // if (requiresAuth && !isAuthenticated) {
  //   next("/login");
  // } else {
  //   next();
  // }
// });


export default router
