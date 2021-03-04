import {author} from './ad.js'
import {offer} from './ad.js'
import {PHOTOS} from './ad.js'
// import {locations} from './ad.js'

let popupCard = document.querySelector('.bibi');

let popupCardTemplate = document.querySelector('#card').content.querySelector('.popup')

const popupCards = offer;
const popupAvatar = author;

let popupCardElement = popupCardTemplate.cloneNode(true);

popupCards.forEach((offer) => {
  popupCardElement.querySelector('.popup__title').textContent = offer.title
  popupCardElement.querySelector('.popup__text--address').textContent = offer.address
  popupCardElement.querySelector('.popup__text--price').textContent = offer.price + ' ₽/ночь'

  let type = offer.type;
  let message;
  if (type == 'palace') {
    message = 'Дворец';
  } else if (type == 'flat') {
    message = 'Квартира';
  } else if (type == 'house') {
    message = 'Дом';
  } else if (type == 'bungalow') {
    message = 'Бунгало';
  }
  popupCardElement.querySelector('.popup__type').textContent = message
  popupCardElement.querySelector('.popup__text--capacity').textContent = offer.rooms + ' комнаты для ' + offer.guests
  popupCardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.checkin + ' , выезд до ' + offer.checkout
  popupCardElement.querySelector('.popup__description').textContent = offer.description

  let CardList = popupCardElement.querySelector('.popup__photos')

  for(let i = 0; i <= PHOTOS.length - 1; i++) {
    let cardCreat = function (tagName, className) {
      let element = document.createElement(tagName)
      element.classList.add(className)
      element.src =  PHOTOS[i]
      return element
    }
    CardList.appendChild(cardCreat('img', 'popup__photo'))
  }
  //у меня не получилось сделать по другому поэтому я просто вывел массив
  popupCard.appendChild(popupCardElement)
});

popupAvatar.forEach((author) => {
  popupCardElement.querySelector('.popup__avatar').src = 'img/avatars/user' + author.avatar + '.png'
})



