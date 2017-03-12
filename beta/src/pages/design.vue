<template>
	<div class="wrapper">
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
import SpinIn from '../components/spin-in';
import VideoBg from '../components/video-bg';

export default {
  components: { SpinIn , VideoBg },
};
</script>
