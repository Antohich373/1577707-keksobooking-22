let typeOfAccommodation = document.getElementById('type');
let priceInput = document.getElementById('price');

let minPrice = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000,
};

typeOfAccommodation.onchange = function() {
  let price = minPrice[this.value];
  priceInput.setAttribute('min', price);
  priceInput.value = price
};

let selectFieldset = document.querySelector('.ad-form__element--time')
let selectElement = selectFieldset.querySelectorAll('select')

for (let i = 0; i < selectElement.length; i++) {
  selectElement[i].addEventListener('change', function() {
    let id = this.getAttribute('id');
    let select = (id === 'timein') ? document.querySelector('#timeout')  : document.querySelector('#timein')

    select.value = this.value
  })
}

let adTitle = document.querySelector('#title');

adTitle.addEventListener('invalid', () => {
  if(adTitle.validity.tooShort){
    adTitle.setCustomValidity('Имя должно состоять минимум из 2-и символов');
  }else if(adTitle.validity.tooLong){
    adTitle.setCustomValidity('Имя не должно превышать 10-а символов');
  }else if(adTitle.validity.valueMissing){
    adTitle.setCustomValidity('ЖМИ СЮДА!');
  }else{
    adTitle.setCustomValidity('');
  }
});

let roomNumber = document.querySelector('#room_number');

let capacity = document.querySelector('#capacity');

const showOptions = {
  1: ['1'],
  2: [ '1', '2'],
  3: [ '3', '1', '2'],
  100: ['0'],
};

roomNumber.addEventListener('change', function() {
  const toShow = showOptions[this.value];
  [...capacity.options].forEach(n => n.hidden = n.value && toShow && !toShow.includes(n.value));
});
