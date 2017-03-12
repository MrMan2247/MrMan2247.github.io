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
    <div class="content web">
      <div class="example-head">
        <h2>
          Below are websites that I have created/worked on
        </h2>
        <p>
          Click on one of the examples below to be redirected to its website.
        </p>
      </div>
      <slider :buttons="true">
        <slide>
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
        </slide>

        <slide>
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
        </slide>

        <slide>
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
        </slide>
      </slider>
    </div>
	</div>
</template>

<script>
import SpinIn from '../components/spin-in';
import VideoBg from '../components/video-bg';
import Slider from '../components/Slider/Slider';
import Slide from '../components/Slider/Slide';
import Effect from '../components/Slider/Effect';

export default {
  components: { SpinIn, Slider, Slide, Effect, VideoBg },
};
</script>
