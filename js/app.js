(function (w, d, u) {
    var reached = 56;
    var target = 125;
    var counter = 0;
    var modal = $modal('progressModal');
    var progressBar = $progressBar('progressBar', reached, target, counter);
    var openBtn = d.getElementById('openBtn');
    var totalNeeded = d.getElementById('totalNeeded');
    d.getElementById('totalTarget').innerHTML = '$' + target ;

    modal.onClose = function () {
        console.log('closing...');
        progressBar.reset();
    }

    progressBar.onProgress = function (res) {
        totalNeeded.innerHTML = '$' + (res.target - res.counter);
    };

    openBtn.onclick = function() {
        modal.open(function() {
            progressBar.animateProgress();
        });
    };

})(window, document);
