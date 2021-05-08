
window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void{
    resetErrorMessages();
    validateTxtInput("first-name", "First name is required");
    validateTxtInput("last-name", "Last name is required");
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

