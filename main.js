
let string = "";
let buttons = document.querySelectorAll("button");

// const operators = new Map([
//   ["+", true],
//   ["-", true],
//   ["*", true],
//   ["/", true],
//   ["%", true],
// ]);

// function isLastCharOperator() {
//   const lastIndex = string.length - 1;
//   const lastValue = string[lastIndex];

//   return operators.has(lastValue);
// }

let isEvaluated = false;
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    // if (e.target.innerHTML == "=") {
    //   string = eval(string);
    //   document.querySelector("input").value = string;
    //   string = "";
    // } else if (e.target.innerHTML == "C") {
    //   string = "";
    //   document.querySelector("input").value = string;
    // } else if (e.target.innerHTML == "+/-") {
    //   string = string * -1;
    //   document.querySelector("input").value = string;
    // } else if (e.target.innerHTML == "Del") {
    //   string = string.slice(0, -1);
    //   document.querySelector("input").value = string;
    // } else {
    //   console.log(e.target);
    //   string = string + e.target.innerHTML;
    //   document.querySelector("input").value = string;
    // }
   // const inputBoxValue = document.querySelectorAll("input").value;
    switch (e.target.innerHTML) {
      case "=":
        string = eval(string);
        document.querySelector("input").value = string;
        isEvaluated = true;
        break;
      case "C":
        string = "";
        document.querySelector("input").value = string;
        isEvaluated = false;
        break;
      case "+/-":
        string = string * -1;
        document.querySelector("input").value = string;
        isEvaluated = false;
        break;
      case "Del":
        string = string.slice(0, -1);
        document.querySelector("input").value = string;
        isEvaluated = false;
        break;
      case "+":
      case "-":
      case "/":
      case "*":
      case "%":
        string = string + e.target.innerHTML;
        document.querySelector("input").value = string;
        isEvaluated = false;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
        string = isEvaluated ? e.target.innerHTML : string + e.target.innerHTML;
        document.querySelector("input").value = string;
        isEvaluated = false;
        break;
      default:
        console.log(e.target);
        isEvaluated = false;
        string = string + e.target.innerHTML;
        document.querySelector("input").value = string;
        break;
    }
  });
});

// let lastDigit = string.split("")[string.length - 1];

//const arthOperators = ["+", "%", "-", "/", "*"];

// else if(!arthOperators.includes(lastDigit))        // if arthmatic symbol is not placed then this if block will work
//         {
//             string = string + e.target.innerHTML;
//             document.querySelector("input").value = string;
//     }

// const isOperator = (value) =>{
//     return arthOperators.includes(lastDigit)
// }

// if operator --> don't take anything
// else if(not operator) --> then appen new value

// } else if (
//   string.split("")[string.length - 1] == "+" ||
//   string.split("")[string.length - 1] == "%" ||
//   string.split("")[string.length - 1] == "-" ||
//   string.split("")[string.length - 1] == "*" ||
//   string.split("")[string.length - 1] == "/"
// ){
//
// }
