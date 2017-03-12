<template>
	<h1>
		<span v-for="char in chars"
			  v-html="char.char"
			  :class="(time > char.index ? 'active' : '')"></span>
	</h1>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				chars: [],
				time: 0
			}
		},
		mounted () {
			var chars  = this.$slots.default[0].text.split('');
			this.chars = chars.map((x,i) => ({ char: x, index: i }));
			setTimeout(() => {
				setInterval(() => this.time++, 75)
			}, 800);
		}
	}
</script>

<style type="text/css">
	h1 {
		overflow: hidden;
	}

	h1 span {
		display: inline-block;
		transform: translateY(-100%);
		min-width: 10px;
		transition: 1s transform cubic-bezier(0.190, 1.000, 0.220, 1.000);
	}

	h1 span.active {
		transform: translateY(0);
	}
</style>