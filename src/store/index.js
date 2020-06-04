import Vue from 'vue'
import Vuex from 'vuex'

/* Modules */
import oauth from './modules/oauth'
import loading from './modules/loading'
import error from './modules/error'
import steps from './modules/steps'

Vue.use(Vuex)

export default new Vuex.Store({
  // Aquuí registramos todos los módulos
  modules: {
    loading,
    oauth,
    error,
    steps
  }
})
