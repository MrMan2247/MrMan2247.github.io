<template>
	<div class="wrapper">
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
			<div class="example">
				<img src="../assets/img/armour-heights.jpg">
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
			<div class="example">
				<img src="../assets/img/new-amherst.jpg">
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
			<div class="example">
				<img src="../assets/img/oshawa-clinic.jpg">
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
	</div>
</template>

<script>
import SpinIn from '../components/spin-in';
import VideoBg from '../components/video-bg';

export default {
  components: { SpinIn , VideoBg },
};
</script>
