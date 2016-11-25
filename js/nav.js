(function() {
	var nav = document.querySelector(".nav");
	var btn = document.querySelector(".menu-btn");

	var state = false;
	
	btn.onclick = function() {
		state = !state;
		if (state) {
			nav.classList.add("active")
		} else {
			nav.classList.remove("active")
		}
	};
})()

/* Holy fucking slow */