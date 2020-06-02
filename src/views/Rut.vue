<template lang="html">
  <section class="src-views-rut">
    <keep-alive>
      <!-- <BuefyForm /> -->
      <RefactoredForm />
    </keep-alive>
  </section>
</template>

<script lang="js">

export default {
  name: 'src-views-rut',
  components: {
    // BuefyForm: Form,
    RefactoredForm: () => import('../components/Rut')
  }

}
</script>
