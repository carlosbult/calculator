//Variables

let mainNumber = document.getElementById("mainNumber");
let secondaryNumber = document.getElementById("secondaryNumber");
let sign = document.getElementById("sign");
var lastSign = "";
let btn = document.getElementsByTagName("button");
let arrayBtn = [];

//Push Numbers and Signs Functions
function equalSign(key) {
  if (mainNumber.textContent === "" && secondaryNumber.textContent === "") {
  } else if (event == 13) {
    sign.textContent = "=";
  } else {
    sign.textContent = key;
  }
}

function zeroKey(key) {
  if (secondaryNumber.textContent && sign.textContent === "=") {
    secondaryNumber.textContent = "";
    sign.textContent = "";
    mainNumber.textContent += key;
  } else if (mainNumber.textContent === "") {
    mainNumber.textContent = "0";
  } else if (mainNumber.textContent === "0") {
    mainNumber.textContent = "0";
  } else {
    mainNumber.textContent += key;
  }
}

function pointKey(key) {
  if (
    mainNumber.textContent === "" &&
    secondaryNumber.textContent &&
    sign.textContent
  ) {
    mainNumber.textContent = "0.";
  }
  if (
    mainNumber.textContent === "" ||
    (secondaryNumber.textContent && sign.textContent === "=")
  ) {
    secondaryNumber.textContent = "";
    sign.textContent = "";
    mainNumber.textContent = "0.";
  } else if (mainNumber.textContent.includes(".")) {
  } else if (mainNumber.textContent) {
    mainNumber.textContent += key;
  }
}

function numbersKey(key) {
  if (secondaryNumber.textContent && sign.textContent === "=") {
    secondaryNumber.textContent = "";
    sign.textContent = "";
    mainNumber.textContent += key;
  } else if (mainNumber.textContent === "0" || mainNumber.textContent === "") {
    mainNumber.textContent = "";
    mainNumber.textContent += key;
  } else {
    mainNumber.textContent += key;
  }
}

// Delete and Reset Function
function delt() {
  mainNumber.textContent = mainNumber.textContent.slice(0, -1);
}

function reset() {
  mainNumber.textContent = "";
  secondaryNumber.textContent = "";
  sign.textContent = "";
}

// Calculate Functions
function signKey(sign) {
  const action = document.getElementById("sign");
  const first = Number(secondaryNumber.textContent);
  const second = Number(mainNumber.textContent);

  if (
    mainNumber.textContent.length == 0 &&
    secondaryNumber.textContent.length == 0
  ) {
  } else if (
    !secondaryNumber.textContent.length == 0 &&
    !action.textContent.length == 0 &&
    mainNumber.textContent.length == 0
  ) {
    lastSign = sign;
    action.textContent = sign;
  } else if (
    (!mainNumber.textContent.length == 0 &&
      !secondaryNumber.textContent.length == 0) ||
    sign === "="
  ) {
    calculate(sign, first, second);
  } else {
    secondaryNumber.textContent = mainNumber.textContent;
    mainNumber.textContent = "";
    lastSign = sign;
    action.textContent = sign;
  }
}

function calculate(sign, num1, num2) {
  action = document.getElementById("sign");
  let result;

  if (lastSign == "+") {
    result = num1 + num2;
  } else if (lastSign == "-") {
    result = num1 - num2;
  } else if (lastSign == "*") {
    result = num1 * num2;
  } else if (lastSign == "/") {
    result = num1 / num2;
  }

  action.textContent = sign;
  lastSign = sign;
  mainNumber.textContent = "";
  secondaryNumber.textContent = result;
}

//Keyboard Events

document.addEventListener("keypress", (press) => {
  event = press.keyCode;

  switch (event) {
    case 48:
      zeroKey(press.key);
      break;

    case 40: case 41: case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57:
      numbersKey(press.key);
      break;

    case 46:
      pointKey(press.key);
      break;

    case 43: case 45: case 42: case 47: case 13: case 61:
      equalSign(press.key);
      signKey(sign.textContent);
      break;

    case 127:
    case 8:
      delt();
      break;

    default:
  }
});

for (var i = 0; i < btn.length; i++) {
  arrayBtn.push(btn[i]);
}

document.addEventListener("keydown", (press) => {
  const event = press.keyCode;

  switch (event) {
    case 48: case 40: case 41: case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57: case 46: case 43: case 45: case 42: case 47: case 13: case 61: case 127: case 96: case 97: case 98: case 99: case 100: case 101: case 102: case 103: case 104: case 105: case 106: case 107: case 109: case 110: case 111: case 187:
      for (var i = 0; i < arrayBtn.length; i++) {
        if (press.key === arrayBtn[i].textContent) {
          arrayBtn[i].style =  'border: 1px solid var(--key-shadow)';
        }
        if (press.key === arrayBtn[i].textContent && arrayBtn[i].textContent === '=') {
          arrayBtn[i].style =  'border: 1px solid var(--equal-key-shadow)';
        }
      }
      break;
  }
});

document.addEventListener("keyup", (press) => {
  const event = press.keyCode;

  switch (event) {
    case 48: case 40: case 41: case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57: case 46: case 43: case 45: case 42: case 47: case 13: case 61: case 127: case 96: case 97: case 98: case 99: case 100: case 101: case 102: case 103: case 104: case 105: case 106: case 107: case 109: case 110: case 111: case 187:
      for (var i = 0; i < arrayBtn.length; i++) {
        if (press.key === arrayBtn[i].textContent) {
          arrayBtn[i].style =  'border-bottom: 3px solid var(--key-shadow);';
        }
        if (press.key === arrayBtn[i].textContent && arrayBtn[i].textContent === '=') {
          arrayBtn[i].style =  'border-bottom: 3px solid var(--equal-key-shadow)';
        }
      }
      break;
  }
});
