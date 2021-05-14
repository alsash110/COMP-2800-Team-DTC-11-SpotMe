import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Chat from '../views/Chat.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Message from '../views/Message.vue'
import DisplayMatches from '../views/DisplayMatches.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/message/:id',
    name: 'Message',
    component: Message,
    props: true,
  },
  {
    path: '/displayMatches',
    name: 'DisplayMatches',
    component: DisplayMatches
  },
  {
<<<<<<< HEAD
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/SettingsTwo.vue')
  },
  {
    path: '/editinfo',
    name: 'EditInfo',
    component: () => import(/* webpackChunkName: "editinfo" */ '../views/EditInfo.vue')
=======
    path: '/signup',
      name: 'Signup',
       component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue')
    },
  {
  path: '/login',
    name: 'Login',
     component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue') 
>>>>>>> db2f47983ac1ab130b846d773498f6ace073136a
  }
  
]

const router = new VueRouter({
  routes
})

export default router
// asn