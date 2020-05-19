let sum = (numberA, numberB) => numberA + numberB;

let rest = (numberA, numberB) => numberA - numberB;

let multiply = (numberA, numberB) => numberA * numberB;

let division = (numberA, numberB) => numberA / numberB;


let handleSumButtonClick = event => {
  let number1 = parseFloat(document.getElementById("number1").value);
  let number2 = parseFloat(document.getElementById("number2").value);
  if(!errorWithParameters(number1, number2)){
    document.getElementById("result").value = sum(number1, number2);
  }
}


let handleRestButtonClick = event => {
  let number1 = parseFloat(document.getElementById("number1").value);
  let number2 = parseFloat(document.getElementById("number2").value);
  if(!errorWithParameters(number1, number2)){
    document.getElementById("result").value = rest(number1, number2);
  }
}


let handleMultiplyButtonClick = event => {
  let number1 = parseFloat(document.getElementById("number1").value);
  let number2 = parseFloat(document.getElementById("number2").value);
  if(!errorWithParameters(number1, number2)){
    document.getElementById("result").value = multiply(number1, number2);
  }
}


let handleDivisionButtonClick = event => {
  let number1 = parseFloat(document.getElementById("number1").value);
  let number2 = parseFloat(document.getElementById("number2").value);
  if(!errorWithParameters(number1, number2)){
    document.getElementById("result").value = division(number1, number2);
  }
}


document.getElementById("btnSum").addEventListener("click", handleSumButtonClick);
document.getElementById("btnRest").addEventListener("click", handleRestButtonClick);
document.getElementById("btnMultiply").addEventListener("click", handleMultiplyButtonClick);
document.getElementById("btnDivision").addEventListener("click", handleDivisionButtonClick);


let errorWithParameters = (param1, param2) => {
  if (isNaN(param1) || isNaN(param2)){
    document.getElementById("result").value = "Error";
    return true;
  }
  return false;
}