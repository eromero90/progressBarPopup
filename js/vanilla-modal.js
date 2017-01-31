(function (w, d, u) {

    function Modal (element) {
        this.element = element;
        this.close();
    }

    Modal.prototype.close = function() {
        this.element.style.display = "none";
    };

    Modal.prototype.open = function() {
        this.element.style.display = "block";
    };

    var core = function(id) {
        var modalElement = d.getElementById(id);
        w.onclick = function(event) {
            if (event.target == modalElement) {
                modalElement.style.display = "none";
            }
        }
        return new Modal(modalElement);
    };

    /*** revealing ***/
    w.$modal = core;
})(window, document);
