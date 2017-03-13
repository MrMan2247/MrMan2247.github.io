<template>
	<div class="wrapper">
    <div class="masthead">
      <odometer delay="0">Bailey Cassel</odometer>
      <h2>Innovative Design</h2>
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

			<div class="page-break skills">
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
			</div>
			<div class="closing">
				<div class="closing-content">
					<div class="left">
						<h1>
							"What makes you better than the other guys?"
						</h1>
					</div>
					<div class="right">
						<p>
							Want to see more about what I do?
						</p>
						<div class="experience-display">
							<router-link to="/experience">
								<div class="experience-btn">See Experience</div>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SpinIn from '../components/spin-in.vue';
import VideoBg from '../components/Video-bg.vue';

import Odometer from '../components/Odometer.vue';

export default {
  components: { SpinIn, Odometer, VideoBg },
};
</script>
