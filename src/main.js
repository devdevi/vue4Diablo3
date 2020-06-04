import Vue from 'vue'
import App from './App.vue'
/* import router from './router' */
import store from './store'

// BootstrapVue
import './plugins/bootstrapVue'

// Vue Font-Awesome
import './plugins/fontAwesome'
import './assets/css/main.styl'

import Router from 'vue-router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(Router)
const url = 'https://cns.modyo.cloud/api/content/spaces/landing-oncologico/types/form-apv/entries/cabd741d-6042-48e2-8820-98fa61234158'

axios.get(url)
  .then(data => {
    const routerOptions = [
      { path: '/', name: 'Home' },
      { path: '/region/:region/profile/:battleTag', name: 'Profile' },
      { path: '/region/:region/profile/:battleTag/hero/:heroId', name: 'Hero' },
      { path: '/error', name: 'Error' },
      { path: '*', redirect: { name: 'Home' } }
    ]
    const { path, name } = data.data.fields
    const route = {
      path,
      name
    }
    routerOptions.push(route)

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

    // Rutas
    new Vue({
      router,
      store,
      methods: {
        // Nuestra función
        init () {
          console.log('Hola 🌝')
          /* store.dispatch('oauth/getToken', null, { root: true }) */
          store.dispatch('oauth/getToken')
        }
      },
      // Hook created
      created () {
        console.log(router)
        this.init()
      },
      render: h => h(App)
    }).$mount('#app')
  })
