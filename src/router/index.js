import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Race from '../views/Race.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/race/:country',
    name: 'Race',
    component: Race,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
