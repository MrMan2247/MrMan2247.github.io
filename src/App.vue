<template>
  <div id="app">
    <dom/>
    <main>
      <router-view></router-view>
    </main>
    <subm/>
  </div>
</template>

<script>
import Dom from './partials/dom'
import Subm from './partials/subm'

export default {
  name: 'app',
  components: { Dom, Subm }
};
</script>

<style lang="scss">
  @import './assets/scss/main.scss';
</style>
