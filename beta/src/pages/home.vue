<template>
	<div class="wrapper">
    <div class="masthead">
      <odometer delay="0">Hey</odometer>
      <video-bg video="../static/timelapse2-stock.mp4" />
    </div>

		<div class="pull-down">
			<img src="../assets/img/pull-down.png">
		</div>
		<div class="content home">
			<div class="introduction">
				<h2>Greetings!</h2>
				<p>
					Looking for modern designs? Need someone who is up to date with all the latest responsive and recursive techiques in approaching all your website and graphic design needs?
				</p>
				<h4>Look no further.</h4>
			</div>

      <slider :buttons="true">
        <slide>
          Slide 1
        </slide>
        <slide>
          Slide 2
        </slide>
      </slider>

			<!--page-break class="skills" background="../assets/img/lower-background.jpg" strength="300">
				<div class="skill">
					<img src="../assets/img/icon-responsive.png"/>
					<h2>Responsive<br>Web<br>Design</h2>
					<p>
						Need a mobile website or need your current website converted? All websites created by Bailey Cassel are responsive and will work on any device!
					</p>
				</div>
				<div class="skill">
					<img src="../assets/img/icon-custom.png"/>
					<h2>Custom<br>Crafted<br>Websites</h2>
					<p>
						Sites are made customary to your business or personal needs. All site suitable for any browser. No templates, No extra cost, No worries.
					</p>
				</div>
				<div class="skill">
					<img class="last-image" src="../assets/img/icon-modern.png"/>
					<h2>Sleek<br>Modern<br>Design</h2>
					<p>
						All websites are kept up to date with the latest in styles that will draw in users and make sure that your website is one-of-a-kind compared to the other guys.
					</p>
				</div>
			</page-break-->
			<div class="closing">
				<div class="closing-content">
					<div class="left">
						<h1>
							Where does this knowledge come from!?
						</h1>
					</div>
					<div class="right">
						<p>
							Curious about how I know what I know? Checkout my experience and schooling and see everything about where and how I learned to do my job.
						</p>
						<div class="experience-display">
							<a href="experience.html">
								<div class="experience-btn">See Experience</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SpinIn from '../components/spin-in';
import VideoBg from '../components/video-bg';

import Odometer from '../components/Odometer';
import Slider from '../components/Slider/Slider';
import Slide from '../components/Slider/Slide';
import Effect from '../components/Slider/Effect';

export default {
  components: { SpinIn, Odometer, Slider, Slide, Effect, VideoBg },
};
</script>
