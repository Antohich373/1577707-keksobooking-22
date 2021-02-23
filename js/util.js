/* eslint-disable no-unused-vars */
const getRandomLengthMass = function(element) {
  let lengthMass = element.length;
  let randomLengthMass = Math.floor(Math.random() * lengthMass);
  return element[randomLengthMass];
};

export {getRandomLengthMass}


