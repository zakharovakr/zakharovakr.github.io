function reset() {
    var name = document.getElementById('name').value;
    name.style.display = 'none';
    var forms = document.getElementById('myForm');
    forms.classList.add("needs-validation");
    var feedback = document.getElementsByClassName('invalid-feedback').style.display = 'none';
};

// Disable form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Get the forms we want to add validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();