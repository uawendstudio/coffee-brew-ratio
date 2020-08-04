
const water = document.getElementById("input-water");
const coffee = document.getElementById("input-grams");
const result = document.getElementById("result");
const ratio = document.getElementById("ratio");


let tempValue = "";

function calc(value) {
  
  if(value != '') {
    tempValue = value;
  } else {
    updateRatioText();
    if (tempValue === "coffee") {
    calcWaterAmount();
    } else {
    calcCoffeeAmount();
    }
  }
 
 if (tempValue === "coffee") {
  calcWaterAmount();
 } else if (tempValue === "water") {
  calcCoffeeAmount();
 }
}

function calcWaterAmount() {
  let num = coffee.value * ratio.value;
  water.value = num.toFixed();
}

function calcCoffeeAmount() {
  let num = water.value / ratio.value;
  coffee.value = num.toFixed();
}

function updateRatioText() {
   ratioText.innerHTML = `Current ratio is: 1:${ratio.value}`;
}
