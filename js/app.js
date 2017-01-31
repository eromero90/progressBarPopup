(function (w, d, u) {
    var modal = $modal('progressModal');
    var openBtn = document.getElementById('openBtn');

    openBtn.onclick = function() {
        modal.open();
    };
})(window, document);
