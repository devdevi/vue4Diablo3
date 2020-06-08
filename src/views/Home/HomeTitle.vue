<template>
  <div class="home-title text-center">
    <h1 v-diablo:bone class="my-5">{{title}}</h1>
    <p class="lead text-muted">Enter your
      <em>
        <a href="https://eu.battle.net/support/es/article/75767" target="_blank" title="Format: YourProfile#1234">battle-tag</a>
      </em>
      and select your region to see your profile!</p>
    <hr class="mt-5">
  </div>
</template>

<script>
export default {
  name: 'HomeTitle',
  data: () => ({
    title: process.env.VUE_APP_TITLE
  })
}
</script>
