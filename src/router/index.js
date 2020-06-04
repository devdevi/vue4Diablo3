/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

Vue.use(Router)
const url = 'https://cns.modyo.cloud/api/content/spaces/landing-oncologico/types/form-apv/entries/cabd741d-6042-48e2-8820-98fa61234158'

axios.get(url)
  .then(data => {
    addToRoutes(data.data.fields)
    // Rutas
  })

function addToRoutes (data) {
  const { path, name, component } = data
  const route = {
    path,
    name
  }
  routerOptions.push(route)
}

const routerOptions = [
  { path: '/', name: 'Home' },
  { path: '/region/:region/profile/:battleTag', name: 'Profile' },
  { path: '/region/:region/profile/:battleTag/hero/:heroId', name: 'Hero' },
  { path: '/about', name: 'About' },
  { path: '/error', name: 'Error' },
  { path: '*', redirect: { name: 'Home' } }
]

const routes = routerOptions.map(r => {
  return {
    ...r,
    // Lazy load
    component: () => import(/* webpackChunkName: "[request]" */`@/views/${r.name}/Index.vue`)
  }
})

console.log(routes)
const router = new Router({
  routes
})

export default router
