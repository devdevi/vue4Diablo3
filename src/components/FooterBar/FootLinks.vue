<template>
  <div>
    <b-nav small align="start">
      <b-nav-item :to="{name: 'Home'}">Home</b-nav-item>
      <b-nav-item v-if="About" :to="{name: 'About'}">About</b-nav-item>
      <b-nav-item v-if="Paso1" :to="{name: 'Paso1'}">Paso1</b-nav-item>
      <b-nav-item v-if="Paso2" :to="{name: 'Paso2'}">Paso2</b-nav-item>
      <b-nav-item v-if="Paso3" :to="{name: 'Paso3'}">Paso3</b-nav-item>
      <b-nav-item href="https://github.com" target="_blank">Github</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'FootLinks',
  mounted () {
    this.$router.options.routes.map(r => {
      console.log(r.name)
      return !!r.name
    })
  },
  computed: {
    ...mapState('steps', ['Paso1', 'Paso2', 'Paso3', 'About'])
  },
  methods: {
    isActive (name) {
      this.$router.options.routes.map(r => {
        console.log(r.name, name)
        return (r.name === name)
      })
    }
  }
}
</script>
