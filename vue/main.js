import Vue from 'vue';
import VueResource from 'vue-resource';

import spinIn from './spin-in.vue';
import pageBreak from './page-break.vue';
import largeImg from './large-img.vue';

Vue.use(VueResource);

var vm = new Vue({
	el: '.wrapper',
	data: {
		scroll: 0
	},
	methods: {
		queryURL (name) {
			return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
		}
	},
	components: {
		spinIn,
		pageBreak,
		largeImg
	}
})

window.onscroll = function () {
	vm.scroll = document.body.scrollTop || window.scrollY;
}