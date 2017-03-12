<template>
	<div class="wrapper">
		<div class="header">
			<video loop="loop" autoplay="autoplay">
				<source src="../img/camerazoom2-stock.mp4">
			</video>
			<div class="nav">
				<div class="menu-btn"></div>
				<a class="first-link" href="index.html">Home</a>
				<a href="design.html">Photography</a>
				<a href="web.html">Website Design</a>
				<a class="last-link" href="experience.html">Experience</a>
			</div>
			<spin-in>Photography</spin-in>
			<h2>Done right</h2>
		</div>
		<div class="pull-down">
			<img src="../img/pull-down.png">
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