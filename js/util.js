const showAlert = function() {
  let errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
  let errorMessage = errorMessageTemplate.cloneNode(true);
  document.querySelector('.main').appendChild(errorMessage)

  let errorMessageButton = errorMessage.querySelector('.error__button')
  errorMessageButton.addEventListener('click', function(){
    document.querySelector('.error').remove('.error')
  })

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      document.querySelector('.error').remove('.error')
    }
  });

  window.addEventListener('click', function () {
    document.querySelector('.error').remove('.error')
  });
}
export {showAlert};

const successfulSending = function() {
  let successfulMessageTemplate = document.querySelector('#success').content.querySelector('.success');
  let successfulMessage = successfulMessageTemplate.cloneNode(true);
  document.querySelector('.main').appendChild(successfulMessage)


  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      document.querySelector('.success').remove('.success')
    }
  });

  window.addEventListener('click', function () {
    document.querySelector('.success').remove('.success')
  });
}
export {successfulSending};

let ressetButton = document.querySelector('.ad-form__reset')

ressetButton.addEventListener('click', function(evt) {
  evt.preventDefault()
  let title = document.getElementById('title')
  let address = document.getElementById('address')
  let price = document.getElementById('price')
  let description = document.getElementById('description')

  title.value = ''
  address.value = ''
  price.value = ''
  description.value = ''
})
