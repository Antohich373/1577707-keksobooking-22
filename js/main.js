let minNumber = 12;
let maxNumber = 20;

const anyNumber = function(min, max){
  if(min >= max || max <= min || min < 0 || max < 0) {
    throw(new Error())
  }
  return  Math.floor(Math.random() * (max - min) + min);
}

anyNumber(minNumber, maxNumber);

let minPosition = 2;
let maxPosition = 222;
let outputNumber = 0;

const anyN = function(min, max){
  if(min >= max || max <= min || min < 0 || max < 0) {
    throw(new Error())
  }
  outputNumber  = Math.random() * (max - min) + min;
  return outputNumber.toFixed(1)
}

anyN(minPosition, maxPosition);
