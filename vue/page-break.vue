<template>
	<div class="page-break"
		 :style="styles">
		<slot></slot>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: ["background", "strength"],
		computed: {
			percent () {
				return this.$parent.scroll / document.body.clientHeight;
			},
			styles () {
				var out = "background-image:url(" + this.background + ");";
				out += "background-position:0 " + Math.floor(((this.percent * this.strength) - this.strength)) + "px";
				return out;
			}
		}
	}
</script>