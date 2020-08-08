
const water = document.getElementById("input-water");
const coffee = document.getElementById("input-grams");
const result = document.getElementById("result");
const ratio = document.getElementById("ratio");


let tempValue = "coffee";

function calc(value) {
  if (value == '') return updateRatioText()
  tempValue = value;
  return whatToCalc()
}

function whatToCalc() {
  if (tempValue === "coffee") return calcWaterAmount()
  if (tempValue === "water") return calcCoffeeAmount()
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
  whatToCalc();
  ratioText.innerHTML = `Current ratio is: 1:${ratio.value}`;
}
