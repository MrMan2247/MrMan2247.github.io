<template>
	<div class="wrapper">
    <div class="masthead">
      <odometer delay="0">Web Design</odometer>
      <h2>Yup, I built that.</h2>
    </div>
		<video-bg video="../static/typing3-stock.mp4" />
		<div class="pull-down">
			<img src="../assets/img/pull-down.png">
		</div>
    <div class="content web">
      <div class="example-head">
        <h2>
          Below are websites that I have created/worked on
        </h2>
        <p>
          Click on one of the examples below to be redirected to its website.
        </p>
      </div>
      <slider :speed="10000" :buttons="true">

      <slide>
          <effect mode="spread">
            <div class="example">
              <div class="left"><img src="../assets/img/paintastic.jpg"></div>
              <div class="right">
                <p>
                  <span>Name: </span><a href="http://paintastic.ca/" target="_blank">Paintastic!</a>
                </p>
                <p>
                  <span>Created by:</span> Myself & <a href="http://www.citrusmedia.com/" target="_blank"><img class="citrusmedia" src="../assets/img/citrus-logo.jpg"></a>
                </p>
                <p>
                  <span>Worked on: </span> Front end Development + testing
                </p>
              </div>
            </div>
          </effect>
        </slide>

        <slide>
          <effect mode="spread">
            <div class="example">
              <div class="left"><img src="../assets/img/armour-heights.jpg"></div>
              <div class="right">
                <p>
                  <span>Name: </span><a href="http://armourheightsbaseball.com/" target="_blank">Armour Heights</a>
                </p>
                <p>
                  <span>Created by:</span> Myself & <a href="http://www.citrusmedia.com/" target="_blank"><img class="citrusmedia" src="../assets/img/citrus-logo.jpg"></a>
                </p>
                <p>
                  <span>Worked on: </span> Front end Development + testing
                </p>
              </div>
            </div>
          </effect>
        </slide>

        <slide>
          <effect mode="spread">
            <div class="example">
              <div class="left"><img src="../assets/img/new-amherst.jpg"></div>
              <div class="right">
                <p>
                  <span>Name: </span><a href="http://www.newamhersthomes.com/" target="_blank">New Amherst Homes</a>
                </p>
                <p>
                  <span>Created by:</span> Myself & <a href="http://www.citrusmedia.com/" target="_blank"><img class="citrusmedia" src="../assets/img/citrus-logo.jpg"></a>
                </p>
                <p>
                  <span>Worked on: </span> Front end Development + CMS content + testing
                </p>
              </div>
            </div>
          </effect>
        </slide>

        <slide>
          <effect mode="spread">
            <div class="example">
              <div class="left"><img src="../assets/img/oshawa-clinic.jpg"></div>
              <div class="right">
                <p>
                  <span>Name: </span><a href="http://www.oshawaclinic.com/" target="_blank">Oshawa Clinic</a>
                </p>
                <p>
                  <span>Created by:</span> Myself & <a href="http://www.citrusmedia.com/" target="_blank"><img class="citrusmedia" src="../assets/img/citrus-logo.jpg"></a>
                </p>
                <p>
                  <span>Worked on: </span> Front end Development + search engine + testing
                </p>
              </div>
            </div>
          </effect>
        </slide>
      </slider>
    </div>
	</div>
</template>

<script>
import VideoBg from '../components/Video-bg.vue';
import Slider from '../components/Slider/Slider.vue';
import Slide from '../components/Slider/Slide.vue';
import Effect from '../components/Slider/Effect.vue';

import Odometer from '../components/Odometer.vue';

export default {
  components: { Slider, Slide, Effect, VideoBg, Odometer },
};
</script>
