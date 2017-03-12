<template>
  <video loop="loop" autoplay="autoplay">
    <source :src="video"/>
  </video>
</template>

<script>
  export default {
    props: {
      video: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  video {
      position: fixed;
      right: 0;
      bottom: 0;
      left: 0;
      overflow: hidden;
      min-width: 100%;
      min-height: 100%;
      z-index: -100;
      background-position: center;
      background-size: cover;
    }
</style>
