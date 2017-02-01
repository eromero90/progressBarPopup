/**
* Vanilla Modal v.0.1.0
*
* Javascript library for Modal manipulation
*
* @copyright 2017
* @author Edison Romero
* @license http://mit-license.org
* 
*/

(function (w, d, u) {

    function Modal (element) {
        this.element = element;
        this.onClose = function () {};
        this.close();
        element.onclick = function(event) {
            if (event.target == element) {
                this.close();
            }
        }.bind(this);
    }

    Modal.prototype.close = function() {
        this.element.style.display = "none";
        this.onClose();
    };

    Modal.prototype.open = function(onOpen) {
        this.element.style.display = "block";
        onOpen();
    };

    var core = function(id) {
        var modalElement = d.getElementById(id);
        return new Modal(modalElement);
    };

    /*** revealing ***/
    w.$modal = core;
})(window, document);
