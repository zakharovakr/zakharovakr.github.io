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
                    form.classList.add('was-validated');
                } else {
                    event.preventDefault();
                    event.stopPropagation();
                    displayMessage();
                    form.classList.remove("was-validated");
                    clearMyFields();

                }
            }, false);
        });
    }, false);

})();

function displayMessage() {
    //display a success message
    document.getElementById("myModal").style.display = "block";
}

function hideModal() {
    document.getElementById("myModal").style.display = "none";
}

function clearMyFields() {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phoneNumber').value = "";
    document.getElementById('inquery').value = "catering";
    document.getElementById('info').value = "";
    document.getElementById('info').value = "";
    document.getElementById("visitedNo").checked = true;
    document.getElementById("visitedYes").checked = false;
    document.getElementById("M").checked = false;
    document.getElementById("T").checked = false;
    document.getElementById("W").checked = false;
    document.getElementById("Th").checked = false;
    document.getElementById("F").checked = false;
}

function resetVal() {
    var form = document.getElementById("myForm");
    form.classList.remove("was-validated");
    document.getElementById("success-message").style.display = "none";
}
