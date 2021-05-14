import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
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
    path: '/displayMatches',
    name: 'DisplayMatches',
    component: DisplayMatches
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/SettingsTwo.vue')
  },
  {
    path: '/editinfo',
    name: 'EditInfo',
    component: () => import(/* webpackChunkName: "editinfo" */ '../views/EditInfo.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
