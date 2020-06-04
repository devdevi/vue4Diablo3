import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// BootstrapVue
import './plugins/bootstrapVue'

// Vue Font-Awesome
import './plugins/fontAwesome'
import './assets/css/main.styl'

Vue.config.productionTip = false

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
    this.init()
    console.log(router)
  },
  render: h => h(App)
}).$mount('#app')
