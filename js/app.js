(function (w, d, u) {
	var modal = $modal('progressModal');
	var openBtn = document.getElementById('openBtn');

	console.log(modal);

	openBtn.onclick = function() {
		modal.open();
	}
})();