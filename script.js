let myInput = document.getElementById("myInput");
let mySubmit = document.getElementById("mySubmit");
let myOutput = document.getElementById("myOutput")
let Age ; 

mySubmit.onclick = function(){
    Age = myInput.value;
    if(Age > 100){
        myOutput.textContent = `You are too old !!`
    }     
    else if (Age <= 0 ){
        myOutput.textContent = `Please enter a valid age`
    }     
    else if (Age >= 18){
        myOutput.textContent = `You are eligible to enter this website`
    }
    else{
        myOutput.textContent = `You are ${Age} years old , you are not eligible to enter this website`
    }
}