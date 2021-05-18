
window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}
function changeHeading(){
    let heading = <HTMLElement>this;
    let red = Math.floor(Math.random() * 255 + 1);
    let green = Math.floor(Math.random() * 255 + 1)
    let blue = Math.floor(Math.random() * 255 + 1)
    let color = "rgb(" + red + "," + green + "," + blue + ")";
    heading.style.color = color;
}

function main():void{
    let msgHeading = document.createElement("h2");
    msgHeading.innerText = " processing form";
    msgHeading.innerText = "processing form";
    msgHeading.setAttribute("class", "message");

    msgHeading.onclick = changeHeading;

    setTimeout(function(){
        msgHeading.remove();
    }, 10000)

    let h1 = document.querySelector("h1");
    h1.insertAdjacentElement("afterend", msgHeading)

    resetErrorMessages();
    validateTxtInput("first-name", "First name is required");
    validateTxtInput("last-name", "Last name is required");

    //validate date
    dateValidation();
}

function dateValidation() {
    let dobBox = <HTMLInputElement>document.getElementById("dob");
    let dob = dobBox.value;
    if (!isValidDate(dob)) {
        //let errorSpan = dobBox.nextElementSibling;
        //errorSpan.innerHTML = "Format should be mm/dd/yyyy"
        let errorSpan = document.getElementById("dob-span");
        errorSpan.innerHTML = "Format should be mm/dd/yyyy";
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

