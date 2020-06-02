<template>
  <ValidationObserver ref="observer" v-slot="{ passes }">
    <!-- the "passes" function on the slot-scope only chains if the validation is successfull -->
    <!-- Making it easier to call directly in the template than to call `passes` on the observer component -->
    <section class="section">

      <BInputWithValidation
        rules="required"
        type="number"
        label="rut"
        vid="rut"
        v-model="rut"
      />

      <div class="buttons">
        <button class="button is-success" @click="passes(submit)">
          <span class="icon is-small">
            <i class="fas fa-check"></i>
          </span>
          <span>Submit</span>
        </button>
        <button class="button" @click="resetForm">
          <span class="icon is-small">
            <i class="fas fa-redo"></i>
          </span>
          <span>Reset</span>
        </button>
      </div>
    </section>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from 'vee-validate'

import BInputWithValidation from './inputs/BInputWithValidation'

export default {
  name: 'RutForm',
  components: {
    ValidationObserver,
    BInputWithValidation
  },
  data: () => ({
    rut: ''
  }),
  methods: {
    submit () {
      console.log('Form submitted yay!')
    },
    resetForm () {
      this.rut = ''
      requestAnimationFrame(() => {
        this.$refs.observer.reset()
      })
    }
  }
}
</script>
