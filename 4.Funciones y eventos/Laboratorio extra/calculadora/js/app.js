let actualResult = 0;

let actualOperation;

let sum = (numberA, numberB) => numberA + numberB;

let rest = (numberA, numberB) => numberB - numberA;

let multiply = (numberA, numberB) => numberA * numberB;

let division = (numberA, numberB) => numberB / numberA;


let handleSumButtonClick = event => {
  actualOperation = "sum";
}

let handleRestButtonClick = event => {
  actualOperation = "rest";
}

let handleMultiplyButtonClick = event => {
  actualOperation = "multiply";
}

let handleDivisionButtonClick = event => {
  actualOperation = "division";
}

let handleNumberButtonChange = event => {
  let number1 = parseFloat(document.getElementById("number1").value);
  if(!errorWithParameters(number1)){
    switch (actualOperation){
      case "sum": actualResult = sum(number1, actualResult);
      break;
      case "rest": actualResult = rest(number1, actualResult);
      break;
      case "multiply": actualResult = multiply(number1, actualResult);
      break;
      case "division": actualResult = division(number1, actualResult);
      break;
      default: actualResult = number1;
      break;
    }
  }
}

let handleResultButtonClick = event => document.getElementById("result").value = actualResult;


document.getElementById("btnSum").addEventListener("click", handleSumButtonClick);
document.getElementById("btnRest").addEventListener("click", handleRestButtonClick);
document.getElementById("btnMultiply").addEventListener("click", handleMultiplyButtonClick);
document.getElementById("btnDivision").addEventListener("click", handleDivisionButtonClick);
document.getElementById("btnResult").addEventListener("click", handleResultButtonClick);
document.getElementById("number1").addEventListener("change", handleNumberButtonChange);


let errorWithParameters = (param1) => {
  if (isNaN(param1)){
    document.getElementById("result").value = "Error";
    return true;
  }
  return false;
}