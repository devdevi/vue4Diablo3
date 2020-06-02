import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Rut',
  component: () =>
    import('../views/Rut.vue')
},
{
  path: '/about',
  name: 'About',
  component: () =>
    import('../views/About.vue')
}, {
  path: '/contacto',
  name: 'Contacto',
  component: () =>
    import('../views/Contacto.vue')
},
{
  path: '/rut',
  name: 'Rut',
  component: () =>
    import('../views/Rut.vue')
}
]

const router = new VueRouter({
  routes
})

export default router
