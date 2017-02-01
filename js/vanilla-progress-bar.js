/**
* Vanilla Progress Bar v.0.1.0
*
* Javascript module for Progress Bar manipulation
*
* @copyright 2017
* @author Edison Romero
* @license http://mit-license.org
* 
*/

(function (w, d, u) {

    function ProgressBar (element, reached, target, counter, labelText) {
        var arrow = d.createElement('span');
        arrow.innerHTML = '&#94;';
        arrow.classList.add('vanilla-arrow-label');
        var labelContainer = d.createElement('div');
        labelContainer.appendChild(arrow);
        labelContainer.classList.add('vanilla-label-container');

        this.element = element;
        this.reached = reached || 0;
        this.target = target || 100;
        this.counter = counter || 0;
        this.counterReset = counter || 0;
        this.labelText = labelText || '$0';
        this.labelTextReset = labelText || '$0';

        this.element.classList.add('vanilla-progress-bar');
        this.bar = d.createElement('div');
        this.bar.classList.add('vanilla-progress');
        this.label = d.createElement('div');
        this.label.classList.add('vanilla-progress-label');
        this.label.innerHTML = this.labelText;
        labelContainer.appendChild(this.label);
        this.bar.appendChild(labelContainer);
        this.element.appendChild(this.bar);
        this.onProgress = function () {};
    }

    ProgressBar.prototype.animateProgress = function () {
        this.id = setInterval(frame.bind(this), 40);
        function frame() {
            if (this.counter >= this.reached) {
                clearInterval(this.id);
            } else {
                this.counter++; 
                this.bar.style.width = (this.counter * 100) / this.target + '%'; 
                this.label.innerHTML = '$' + this.counter ;
                this.onProgress(this);
            }
        }
    };

    ProgressBar.prototype.reset = function() {
        clearInterval(this.id);
        this.counter = this.counterReset;
        this.labelText = this.labelTextReset;
        this.bar.style.width = (this.counter * 100) / this.target + '%'; 
        this.label.innerHTML = '$' + this.counter ;
    };

    var core = function(id, reached, target, counter, labelText) {
        var progressBarElement = d.getElementById(id);
        return new ProgressBar(progressBarElement, reached, target, counter, labelText);
    };

    /*** revealing ***/
    w.$progressBar = core;
})(window, document);
