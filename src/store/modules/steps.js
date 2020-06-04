export default {
  namespaced: true,
  state: {
    Paso1: false,
    Paso2: false,
    Paso3: false,
    About: false
  },
  mutations: {
    SET_STEP (state, payload) {
      state[payload] = true
    }
  }
}
