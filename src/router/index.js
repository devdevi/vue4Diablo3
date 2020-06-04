/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

Vue.use(Router)

/*  { path: '/error', name: 'Error' }, */
const routerOptions = [
  { path: '/', name: 'Home' },
  { path: '/region/:region/profile/:battleTag', name: 'Profile' },
  { path: '/region/:region/profile/:battleTag/hero/:heroId', name: 'Hero' },
  { path: '*', redirect: { name: 'Home' } }
]

const routes = routerOptions.map(r => {
  return {
    ...r,
    // Lazy load
    component: () => import(/* webpackChunkName: "[request]" */`@/views/${r.name}/Index.vue`)
  }
})

const router = new Router({
  routes
})

export default router
