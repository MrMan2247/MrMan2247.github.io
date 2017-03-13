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
      <div class="vue-waterfall-container">
        <waterfall :line-gap="190" :watch="images" align="center">
          <waterfall-slot v-for="(image, key) in images"
            :width="image.width"
            :height="image.height"
            :order="key"
            :key="key"
            class="con">
              <div class="sizemeplzdaddy" :style="'background-image: url(' + image.src + ');'" />
          </waterfall-slot>
        </waterfall>
      </div>
		</div>
	</div>
</template>

<script>
import VideoBg from '../components/Video-bg.vue';

import Odometer from '../components/Odometer.vue';

import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'

export default {
  data () {
    return {
      images: [
        {
          src: require('../assets/img/image1-hover.jpg'),
          height: Math.floor(Math.random() * 20)+40,
          width: Math.floor(Math.random() * 20)+30
        },
        {
          src: require('../assets/img/image2-hover.jpg'),
          height: Math.floor(Math.random() * 20)+40,
          width: Math.floor(Math.random() * 20)+30
        },
        {
          src: require('../assets/img/image3-hover.jpg'),
          height: Math.floor(Math.random() * 20)+40,
          width: Math.floor(Math.random() * 20)+30
        },
        {
          src: require('../assets/img/image4-hover.jpg'),
          height: Math.floor(Math.random() * 20)+40,
          width: Math.floor(Math.random() * 20)+30
        },
        {
          src: require('../assets/img/image5-hover.jpg'),
          height: Math.floor(Math.random() * 20)+40,
          width: Math.floor(Math.random() * 20)+30
        },
        {
          src: require('../assets/img/image6-hover.jpg'),
          height: Math.floor(Math.random() * 20)+40,
          width: Math.floor(Math.random() * 20)+30
        },
        {
          src: require('../assets/img/image7-hover.jpg'),
          height: Math.floor(Math.random() * 20)+40,
          width: Math.floor(Math.random() * 20)+30
        },
        {
          src: require('../assets/img/image8-hover.jpg'),
          height: Math.floor(Math.random() * 20)+40,
          width: Math.floor(Math.random() * 20)+30
        },
        {
          src: require('../assets/img/image9-hover.jpg'),
          height: Math.floor(Math.random() * 20)+40,
          width: Math.floor(Math.random() * 20)+30
        },
      ]
    }
  },
  components: { VideoBg, Odometer, Waterfall, WaterfallSlot },
};
</script>

<style lang="scss">
.vue-waterfall-container {
  background: #454545;
  padding: 75px 0;
}
.con {
  overflow: hidden;
}
.sizemeplzdaddy {
  border: 3px #fff solid;
  height: 90%;
  width: 90%;
  margin: 5%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>
