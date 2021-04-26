window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    validateTxtInput("first-name", "First name is required");
    validateTxtInput("last-name", "Last name is required");
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
