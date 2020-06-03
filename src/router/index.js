import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Index.vue'
import Rut from '../views/Rut.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/about',
  name: 'About',
  component: () =>
    import(/* webpackChunkName: "about" */'../views/About/Index.vue')
},
{
  path: '/rut',
  name: 'Rut',
  component: Rut
}
]

const router = new VueRouter({
  routes
})

export default router
