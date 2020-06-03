<template>
  <div class="about">
          <form class="">
        <!-- email -->
          <label
            class=""
            for="input_email">email</label>
          <input
            id="input_email"
            v-model="email"
            name="email"
            type="text"
          >
          <br>
          Telefono
          <input
            id="input_telefono"
            v-model="telefono"
            name="telefono"
            type="text"
          >

          <i class="bar" />
      </form>
  </div>
</template>
<script>
export default {
  name: 'Contact',
  data: () => ({
    email: '',
    telefono: ''
  })
}
</script>
