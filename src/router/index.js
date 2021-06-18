import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import List from '../views/List.vue'
import Main from '../views/Main.vue'
import About from '../views/About.vue'
import Register from '../views/Register.vue'

import Contact from '../views/Contact.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    props: true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    props: true
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    props: true
  },
  {
    path: '/list',
    name: 'List',
    component: List,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    props: true
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    props: true
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Events.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
