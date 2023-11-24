const input = document.getElementById("result");
const toast = document.getElementById("toast");
const output=document.getElementById('output')
let temp=''
let anstemp=''
let fer=0
let kel=0
let cel=0
function calculate(value) {
 if(temp==="celsius"){
  if(anstemp==="ansfahrenheit"){
    fer=Number(value)*(9/5)+32
    console.log(fer,'fer')
    output.innerHTML=fer.toFixed(2)+"\u00B0F"
  }else if(anstemp==='anskelvin'){
    kel=Number(value)+273.15
    output.innerHTML=kel.toFixed(2)+"\u00B0K"
  }
 }
 else if( temp==='fahrenheit'){
  if(anstemp==='anscelsius'){
    cel=(Number(value)-32)*5/9
    output.innerHTML=cel.toFixed(2)+"\u00B0C"
  }else if(anstemp==='anskelvin'){
    kel=(Number(value)-32)*5/9+273.15
    output.innerHTML=kel.toFixed(2)+"\u00B0k"
  }
 }
 else if(temp==="kelvin"){
  if(anstemp==='anscelsius'){
    cel=Number(value)-273.15
    output.innerHTML=cel.toFixed(2)+"\u00B0C"
  }else if(anstemp==='ansfahrenheit'){
    fer=(Number(value)-273.15)*9/5+32
    output.innerHTML=fer.toFixed(2)+"\u00B0F"
  }
 }
}
function ansScreen(enteredansvalue){
  anstemp=enteredansvalue
}
// Displays entered value on screen.
function liveScreen(enteredValue) {
  temp=enteredValue
  console.log(enteredValue,'enter')
}
function clearscreen(){
  output.innerHTML=''
  input.value=''
}
//adding event handler on the document to handle keyboard inputs
document.addEventListener("keydown", keyboardInputHandler);

//function to handle keyboard inputs
function keyboardInputHandler(event) {
  event.preventDefault();
  if (event.key === "0") {
    input.value += "0";
  } else if (event.key === "1") {
    input.value += "1";
  } else if (event.key === "2") {
    input.value += "2";
  } else if (event.key === "3") {
    input.value += "3";
  } else if (event.key === "4") {
    input.value += "4";
  } else if (event.key === "5") {
    input.value += "5";
  } else if (event.key === "6") {
    input.value += "6";
  } else if (event.key === "7") {
    input.value += "7";
  } else if (event.key === "7") {
    input.value += "7";
  } else if (event.key === "8") {
    input.value += "8";
  } else if (event.key === "9") {
    input.value += "9";
  }
  //operators
  if (event.key === ".") {
    input.value += ".";
  }
  if (event.key === "Enter") {
    calculate(result.value);
  }
  if (event.key === "Backspace") {
    const resultInput = input.value;
    input.value = resultInput.substring(0, input.value.length - 1);
  }
}
