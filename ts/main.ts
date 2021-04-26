
window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void{
    validateTxtInput("first-name", "First name is required");
    validateTxtInput("last-name", "Last name is required");
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

function isEmailValid(email:string){
    if(!email.includes("@")){
        return false;
    }
}
