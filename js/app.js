(function (w, d, u) {
    var reached = 56;
    var target = 125;
    var counter = 0;
    //Create modal handler
    var modal = $modal('progressModal');
    //Create the progress bar
    var progressBar = $progressBar('progressBar', reached, target, counter);
    var openBtn = d.getElementById('openBtn');
    var totalNeeded = d.getElementById('totalNeeded');
    //Set the target
    d.getElementById('totalTarget').innerHTML = '$' + target ;

    //Reset the progress bar on modal close
    modal.onClose = function () {
        progressBar.reset();
    }

    //Update the amount needed while the progress bar is growing
    progressBar.onProgress = function (res) {
        totalNeeded.innerHTML = '$' + (res.target - res.counter);
    };

    //Open the modal
    openBtn.onclick = function() {
        modal.open(function() {
            progressBar.animateProgress();
        });
    };

})(window, document);
