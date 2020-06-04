<template>
  <div>
    <BaseLoading v-if="isLoading" />
    <MainBlock v-else :profile-data="profileData"/>
  </div>
</template>

<script>
/* Mixin */
import setError from '@/mixins/setError'
import { getApiAccount } from '@/api/search'
/* Components */
import BaseLoading from '@/components/BaseLoading'
import MainBlock from '@/views/Profile/MainBlock/Index'

export default {
  name: 'ProfileView',
  mixins: [
    setError
  ],
  components: {
    BaseLoading,
    MainBlock
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
