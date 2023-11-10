const functionsElement = document.querySelector(".functions");
const numbersElement = document.querySelector(".numbers");
const displayElement = document.querySelector(".display");
displayElement.textContent = ''
let allValue = ''
let result = 0

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "=", "(", ")",];
const functions = ["+", "-", "*", "/"];

for (let number of numbers) {
  numbersElement.innerHTML += `<button onclick="displayNumber('${number}')" class="dark-btn">${number}</button>`;
}

for (let func of functions) {
  functionsElement.innerHTML += `<button onclick="displayNumber('${func}')" class="orange-btn">${func}</button>`;
  
}

function displayNumber(carac) {
  if(carac !== '='){
    if (displayElement.textContent.length < 16) {
      allValue += carac
      console.log(allValue)
      displayElement.textContent = allValue;
    }
  }else{
    calculate()
  }
}

function calculate(){
  result = eval(allValue)
  displayElement.textContent = result
  allValue = displayElement.textContent
}

function cleanDisplay() {
  displayElement.textContent = "";
  allValue = ""
}

function backspace() {
  allValue = allValue.slice(0, -1);
  displayElement.textContent = allValue;
}