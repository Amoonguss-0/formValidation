
window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void{
    resetErrorMessages();
    validateTxtInput("first-name", "First name is required");
    validateTxtInput("last-name", "Last name is required");

    //validate date
    let dobBox = <HTMLInputElement>document.getElementById("dob");
    let dob = dobBox.value;
    if(!isValidDate(dob)){
        let errorSpan = dobBox.nextElementSibling;
        errorSpan.innerHTML = "Format should be mm/dd/yyyy"
    }
}

function resetErrorMessages(): void{
    let allSpans = document.querySelectorAll("form span");
    for( let i = 0; i < allSpans.length; i++){
        let currSpan = <HTMLElement>allSpans[i];
        if(currSpan.hasAttribute("data-required")){
            currSpan.innerText = "*"
        }
        else{
            currSpan.innerText ="";
        }
    }
}

function isValidDate(input:string):boolean{
    //validating mm/dd/yyyy and m/d/yyyy
    let pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g

    return pattern.test(input);
}

function validateTxtInput(id:string, errMsg:string):boolean{
    let txtBox = 
        <HTMLInputElement>document.getElementById(id);
    let textBoxValue = txtBox.value;
    if (textBoxValue == "") {
        let errSpan = 
            <HTMLSpanElement>txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
}

