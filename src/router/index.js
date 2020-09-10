import Vue from 'vue'
import VueRouter from 'vue-router'
import  login from '../views/login'
import Home from "../views/home/index"

Vue.use(VueRouter)

  const routes = [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
]

const router = new VueRouter({
  routes
})

export default router
