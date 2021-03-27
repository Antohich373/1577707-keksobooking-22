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
  selectElement[i].addEventListener('change', function(e) {
    let id = this.getAttribute('id')
    let select

    if( id === 'timein' ) {
      select = document.querySelector('#timeout')
    }
    else if( id === 'timeout' ) {
      select = document.querySelector('#timein')
    }

    select.value = this.value
  })
}
