import Vue from 'vue';
import spinIn from './spin-in.vue';
import pageBreak from './page-break.vue';

var vm = new Vue({
	el: '.wrapper',
	data: {
		scroll: 0
	},
	components: {
		spinIn,
		pageBreak
	}
})

window.onscroll = function () {
	vm.scroll = document.body.scrollTop;
}