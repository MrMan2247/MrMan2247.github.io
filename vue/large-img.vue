<template>
	<div class="gallery-image-display">
		<h2 v-if="!loading">Image size: {{ width }}x{{ height }}px</h2>
		<h2 v-if="loading">Loading... {{ percent }}%</h2>
		<img :src="blob">
	</div>
</template>

<script type="text/javascript">
	export default {
		props: ["image"],
		data () {
			return {
				loading: true,
				percent: 0,
				width: 0,
				height: 0,
				blob: null
			}
		},
		mounted () {
			this.$http.get(this.image, {
				progress: (e) => { this.percent = Math.floor((e.loaded / e.total) * 100) }
			}).then(( res ) => {
				res.blob().then((blob) => {
					var reader = new window.FileReader();
					reader.readAsDataURL(blob);
					reader.onloadend = () => {
						this.blob = reader.result;
						var img = new Image();
						img.src = this.blob;
						img.onload = () => {
							this.width = img.width;
							this.height = img.height;
							this.loading = false;
						}
					}
				});
			})
		}
	}
</script>