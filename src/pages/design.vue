<template>
	<div class="wrapper">
    <div class="masthead">
      <odometer delay="0">Bailey Cassel</odometer>
      <h2>Innovative Design</h2>
    </div>
    <video-bg video="../static/timelapse2-stock.mp4" />
		<div class="pull-down">
			<img src="../assets/img/pull-down.png">
		</div>
		<div class="content design">
			<div class="introduction design">
				<h2>Here's some of my work</h2>
				<p>
					Browse through some of my photographs and find one that suites your fancy, there are many different styles and themes to see.
				</p>
			</div>

			<div class="gallery" onclick="showGallery()">
			click me
			</div>
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
