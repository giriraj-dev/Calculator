let string = "";
let buttons = document.querySelectorAll("button");

const operators = new Map ([["+",true],["-",true],["*",true],["/",true],["%",true]]);

function isLastCharOperator(){
  const lastIndex  = string.length-1;
  const lastValue = string[lastIndex]

  return operators.has(lastValue)
}

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
      
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
      string = "";
    }
      else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "+/-") {
      string = string * -1;
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "Del") {
      string = string.slice(0, -1);
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
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
    // ) 