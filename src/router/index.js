import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import FontsAndBtns from '../views/FontAndBtns.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta : {
      requireAuth : true
    }
  },
  {
    path : '/dashboard',
    name : 'Dashboard',
    component : Dashboard,
    meta : {
      requireAuth : false
    }
  },
  {
    path : '/fonts',
    name : 'FontsAndBtns',
    component : FontsAndBtns,
    meta : {
      requireAuth : true
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// navigation guards -- 
// router.beforeEach((to, from, next) => {
//   if(to.meta.requireAuth && !localStorage.getItem('AccessToken')){
//     next({name : 'Dashboard'})
//   }
//   next()
// })

export default router
