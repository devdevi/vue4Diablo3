<template>
  <div class="about">
          <form class="">
        <!-- Rut -->
          <label
            class="control-label m-0 text-capitalize"
            for="input_rut">Rut</label>
          <input
            id="input_rut"
            v-model="rut"
            name="rut"
            type="text"
          >

          <i class="bar" />
      </form>
  </div>
</template>
<script>
export default {
  name: 'Rut',
  data: () => ({
    rut: ''
  })
}
</script>
