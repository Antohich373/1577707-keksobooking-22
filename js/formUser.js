
const submitDescriptionForm = document.querySelector('.ad-form')

const setUserFormSubmit = function(onSuccess){
  submitDescriptionForm.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const formData = new FormData(evt.target)

    fetch(
      'https://22.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
      },
    ).then(() => onSuccess());
  })
}

export {setUserFormSubmit}

