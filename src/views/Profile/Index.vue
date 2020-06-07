<template>
  <div>
    <BaseLoading v-if="isLoading" />
    <MainBlock v-else :profile-data="profileData"/>
    <ArtisansBlock :artisans-data="artisansData" />
  </div>
</template>

<script>
/* Mixin */
import setError from '@/mixins/setError'
import { getApiAccount } from '@/api/search'
/* Components */
import BaseLoading from '@/components/BaseLoading'
import MainBlock from '@/views/Profile/MainBlock/Index'

import ArtisansBlock from './ArtisansBlock/Index'
export default {
  name: 'ProfileView',
  mixins: [
    setError
  ],
  components: {
    BaseLoading,
    MainBlock,
    ArtisansBlock
  },
  data: () => ({
    isLoading: false,
    profileData: null
  }),
  created () {
    this.isLoading = true
    // Destructuring
    const { region, battleTag: account } = this.$route.params
    console.log(this.$route.params)
    this.fetchData(region, account)
  },
  computed: {
    artisansData () {
      return {
        blacksmith: this.profileData.blacksmith,
        blacksmithHardcore: this.profileData.blacksmithHardcore,
        jeweler: this.profileData.jeweler,
        jewelerHardcore: this.profileData.jewelerHardcore,
        mystic: this.profileData.mystic,
        mysticHardcore: this.profileData.mysticHardcore
      }
    }
  },
  methods: {
    /**
     * Obtener los datos de la API
     * Guardarlos en 'profileData'
     */
    fetchData (region, account) {
      getApiAccount({ region, account })
        .then(({ data }) => {
          /* Guardamos los datos en una variable local */
          this.profileData = data
        })
        .catch((err) => {
          this.profileData = null
          /* Creamos objeto error */
          const errObj = {
            routeParams: this.$route.params,
            mensage: err.message
          }
          if (err.response) {
            const { data, stauts } = err.response
            errObj.data = data
            errObj.stauts = stauts
          }
          /* Hacemos uso del mixin */
          /* Guardamos el objeto en el store */
          this.setApiErr(errObj)
          /* Navegamos a la ruta nombre 'Error' */
          this.$route.push({ name: 'Error' })
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>
