<template lang="html">
  <section class="src-views-contacto">
    <keep-alive>
      <!-- <BuefyForm /> -->
      <RefactoredForm />
    </keep-alive>
  </section>
</template>

<script lang="js">

export default {
  name: 'src-views-contacto',
  components: {
    // BuefyForm: Form,
    RefactoredForm: () => import('../components/RefactoredForm')
  }
}
</script>
