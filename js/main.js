let minNumber = 12;
let maxNumber = 20;

const anyNumber = function(min, max){
  if(min >= max || max <= min || min < 0 || max < 0) {
    console.log('Ошибка - скоректиуйте введенные числа');
  }
  return  Math.floor(Math.random() * (max - min) + min);
}

console.log(anyNumber(minNumber, maxNumber));

let minPosition = 1222;
let maxPosition = 222;
let outputNumber = 0;

const anyN = function(min, max){
  if(min >= max || max <= min || min < 0 || max < 0) {
    console.log('Ошибка - скоректиуйте введенные числа');
  }
  outputNumber  = Math.random() * (max - min) + min;
  return outputNumber.toFixed(1)
}

console.log(anyN(minPosition, maxPosition));
