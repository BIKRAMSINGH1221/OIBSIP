
let A=document.getElementById("Number");
let B=document.getElementById("Convert-of");
let C=document.getElementById("Convert-to")
let D=document.getElementById("Converter");
let button=document.getElementById("button");



function fahtoCel(){
    if(B.value == "C" && C.value == "C" || ( B.value == "F" && C.value == "F")){
        alert("invalid Inputs");
    }
    
    else {
        let FtoC=((A.value)-32)*(5/9).toFixed(2);
       if(B.value == "F" && C.value == "C"){
D.innerText = `${FtoC}C`;
       } 

       else{
        let CtoF=((A.value*(9/5)+32).toFixed(2));
        D.innerHTML = `${CtoF}F`
        
        
    }



    }
}

button.addEventListener("click",fahtoCel);