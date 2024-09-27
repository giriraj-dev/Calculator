let string = "0";
let buttons = document.querySelectorAll("button");
let isEvaluated = false;
let lastClickedIsOperator = false;
const maxLength = 20;
const inputBox = document.querySelector("#input-box");

function adjustFontSize() {
  const maxFontSize = 2; // maximum font size in rem
  const minFontSize = 1; // minimum font size in rem
  const scaleFactor = 0.05; // decrease font size by this factor per character

  // Calculate the new font size based on the length of the expression
  let newFontSize = maxFontSize - string.length * scaleFactor;

  // Ensure the font size doesn't drop below the minimum
  newFontSize = Math.max(newFontSize, minFontSize);

  // Apply the new font size
  inputBox.style.fontSize = `${newFontSize}rem`;
}

// Call this function every time the input changes
function updateInputBox() {
  inputBox.value = string;
  adjustFontSize();
}

// // Example: Calling updateInputBox after each button click
// button.addEventListener("click", (e) => {
//     // Update the string as needed...
//     updateInputBox(); // Adjust the font size and update the input box
// });

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    const inputBoxValue = document.querySelector("input");
    switch (e.target.innerHTML) {
      case "=":
        string = eval(string);
        updateInputBox();
        inputBoxValue.value = string;
        isEvaluated = true;
        lastClickedIsOperator = false;
        break;
      case "C":
        string = "0";
        updateInputBox();
        inputBoxValue.value = string;
        isEvaluated = false;
        lastClickedIsOperator = false;
        break;
      case "+/-":
        string = string * -1;
        updateInputBox();
        inputBoxValue.value = string;
        isEvaluated = false;
        lastClickedIsOperator = false;
        break;
      case "Del":
        string = string.length > 1 ? string.slice(0, -1) : "0";
        updateInputBox();
        inputBoxValue.value = string;
        isEvaluated = false;
        lastClickedIsOperator = false;
        break;
      case "+":
      case "-":
      case "/":
      case "*":
      case "%":
      case".":
        // If evaluated and operator clicked, start a new expression with the result and operator
        if (isEvaluated) {
          string = inputBoxValue.value + e.target.innerHTML;
        } else if (!lastClickedIsOperator && string.length < maxLength) {
          string += e.target.innerHTML;
        }
        updateInputBox();
        inputBoxValue.value = string;
        isEvaluated = false;
        lastClickedIsOperator = true;
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
        string =
          isEvaluated || string === "0"
            ? e.target.innerHTML
            : string + e.target.innerHTML;
        updateInputBox();
        inputBoxValue.value = string;
        isEvaluated = false;
        lastClickedIsOperator = false;
        break;
      default:
        console.log(e.target);
        string = string + e.target.innerHTML;
        updateInputBox();
        inputBoxValue.value = string;
        lastClickedIsOperator = false;
        break;
    }
  });
});

// class Calculator {
//   constructor( previousOperandTextElement, currentOperandTextElement){
//       this.previousOperandTextElement = previousOperandTextElement;
//       this.currentOperandTextElement = currentOperandTextElement;
//       // Call the clear function to start with a clear display
//       this.clear();
//   }

//   clear(){
//       this.previousOperand = '';
//       this.currentOperand = '';
//       this.operation = '';

//   }
// }
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
