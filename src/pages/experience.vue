<template>
  <div class="wrapper">
    <div class="masthead">
      <odometer delay="0">Coming Soon</odometer>
      <h2>to a webpage near you!</h2>
    </div>
    <video-bg video="../static/timelapse2-stock.mp4" />
    <div class="pull-down">
      <img src="../assets/img/pull-down.png">
    </div>
    <div class="content design">

    </div>
  </div>
</template>

<script>
import VideoBg from '../components/Video-bg.vue';

import Odometer from '../components/Odometer.vue';

export default {
  components: { VideoBg, Odometer },
};
</script>
