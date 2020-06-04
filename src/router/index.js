/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
/* Componentes */
import Home from '@/views/Home/Index.vue'
import Profile from '@/views/Profile/Index.vue'
import Hero from '@/views/Hero/Index.vue'

Vue.use(Router)

/*  { path: '/error', name: 'Error' }, */
const routerOptions = [
  { path: '/', name: 'Home' },
  { path: '/region/:region/profile/:battleTag', name: 'Profile' },
  { path: '/region/:region/profile/:battleTag/hero/:heroId', name: 'Hero' },
  { path: '*', redirect: { name: 'Home' } }
]
const cmp = {
  Home,
  Profile,
  Hero
}

const routes = routerOptions.map(r => {
  return {
    ...r,
    // Lazy load
    /* webpackChunkName: "[request]" */
    /* () => import(`@/views/${r.name}/Index.vue`) */
    component: cmp[r.name]
  }
})

const router = new Router({
  routes
})

export default router
