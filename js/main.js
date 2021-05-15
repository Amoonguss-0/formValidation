window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    resetErrorMessages();
    validateTxtInput("first-name", "First name is required");
    validateTxtInput("last-name", "Last name is required");
    var dobBox = document.getElementById("dob");
    var dob = dobBox.value;
    if (!isValidDate(dob)) {
        var errorSpan = dobBox.nextElementSibling;
        errorSpan.innerHTML = "Format should be mm/dd/yyyy";
    }
}
function resetErrorMessages() {
    var allSpans = document.querySelectorAll("form span");
    for (var i = 0; i < allSpans.length; i++) {
        var currSpan = allSpans[i];
        if (currSpan.hasAttribute("data-required")) {
            currSpan.innerText = "*";
        }
        else {
            currSpan.innerText = "";
        }
    }
}
function isValidDate(input) {
    var pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g;
    return pattern.test(input);
}
function validateTxtInput(id, errMsg) {
    var txtBox = document.getElementById(id);
    var textBoxValue = txtBox.value;
    if (textBoxValue == "") {
        var errSpan = txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
}
