// les recupérations
const scren = document.querySelector(".myScreen");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const del = document.querySelector(".del");
const ac = document.querySelector(".ac");
const virgil = document.querySelector(".virgil");
const equal = document.querySelector(".equal");

let operator = "";
let firstNumber = "";
let secondNumber = "";
let stateApp = false;

// les chiffres
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (!stateApp) {
      firstNumber += number.textContent;
      scren.innerText = firstNumber;
    } else {
      secondNumber += number.textContent;
      scren.innerText = secondNumber;
    }
  });
});

// les opérateurs
operators.forEach((op) => {
  op.addEventListener("click", () => {
    if (firstNumber !== "" && secondNumber !== "") {
      calculate();
    }
    operator = op.textContent;
    stateApp = true;
    scren.innerText = operator;
  });
});

// del
del.addEventListener("click", () => {
  if (!stateApp) {
    firstNumber = firstNumber.slice(0, -1);
    scren.innerText = firstNumber || "0";
  } else {
    secondNumber = secondNumber.slice(0, -1);
    scren.innerText = secondNumber || "0";
  }
});

// la virgule
virgil.addEventListener("click", () => {
  if (!stateApp) {
    if (!firstNumber.includes(".")) {
      if (firstNumber === "") {
        firstNumber = "0.";
      } else {
        firstNumber += ".";
      }
    }
    scren.innerText = firstNumber;
  } else {
    if (!secondNumber.includes(".")) {
      if (secondNumber === "") {
        secondNumber = "0.";
      } else {
        secondNumber += ".";
      }
    }
    scren.innerText = secondNumber;
  }
});

// egal
equal.addEventListener("click", () => {
  if (firstNumber && operator && secondNumber) {
    calculate();
  }
});

// ac
ac.addEventListener("click", () => {
  scren.innerHTML = "0";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  stateApp = false;
});

// la founction calculate()
const calculate = () => {
  const nbre1 = parseFloat(firstNumber);
  const nbre2 = parseFloat(secondNumber);
  let result = 0;
  switch (operator) {
    case "+":
      result = nbre1 + nbre2;
      break;
    case "-":
      result = nbre1 - nbre2;
      break;
    case "/":
      result = nbre1 / nbre2;
      break;
    case "x":
      result = nbre1 * nbre2;
      break;
    case "%":
      result = (nbre1 * nbre2) / 100;
      break;
  }
  scren.innerText = result;
  // toString() va convertir le resultat en en chaine de caractère*
  // de sorte qu'on puisse continuer à faire des calcule
  firstNumber = result.toString();
  operator = "";
  secondNumber = "";
  stateApp = false;
};
