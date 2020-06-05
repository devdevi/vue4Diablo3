import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// BootstrapVue
import './plugins/bootstrapVue'

// Vue Font-Awesome
import './plugins/fontAwesome'
import './assets/css/main.styl'

import axios from 'axios'
import Paso1 from '@/views/Paso1/Index.vue'
import Paso2 from '@/views/Paso2/Index.vue'
import Paso3 from '@/views/Paso3/Index.vue'
import About from '@/views/About/Index.vue'

const cmp = {
  Paso1,
  Paso2,
  Paso3,
  About
}

Vue.config.productionTip = false
const ROUTES_URL = 'https://cns.modyo.cloud/api/content/spaces/cotizador/types/routes/entries/125f123a-780a-4c1a-8dea-eae43e451345'
const ROUTE_URL = 'https://cns.modyo.cloud/api/content/spaces/cotizador/types/route/entries/'
// Rutas
new Vue({
  router,
  store,
  methods: {
    // Nuestra función
    init () {
      console.log('Hola 🌝')
      /* store.dispatch('oauth/getToken', null, { root: true }) */
      this.getRoutes()
      store.dispatch('oauth/getToken')
    },
    getRoutes () {
      axios.get(`${ROUTES_URL}`)
        .then(data => {
          data.data.fields.routes.map(r => {
            this.getRoute(r.uuid)
          })
        })
        .catch(e => console.error(e))
    },
    getRoute (id) {
      axios.get(`${ROUTE_URL}${id}`)
        .then(res => {
          this.addRoute([{ ...res.data.fields }])
        })
        .catch(e => console.error(e))
    },
    addRoute (route) {
      this.$router.addRoutes(this.createRoute(route))
      store.commit('steps/SET_STEP', route[0].name)
    },
    createRoute (route) {
      return route.map(r => {
        return {
          ...r,
          // Lazy load 🦄
          /* webpackChunkName: "[request]" 🙂 */
          /* () => import(`@/views/${r.name}/Index.vue`) */
          component: cmp[r.name]
        }
      })
    }
  },
  // Hook created
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
