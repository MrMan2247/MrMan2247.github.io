<template>
  <div id="app">
    <dom/>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Dom from './partials/dom'

export default {
  name: 'app',
  components: { Dom }
};
</script>

<style lang="scss">
  @import './assets/scss/main.scss';
</style>
