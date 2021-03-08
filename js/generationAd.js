import {author} from './ad.js'
import {offer} from './ad.js'
import {PHOTOS} from './ad.js'
import {FEATURES} from './ad.js'
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
  let CardListFeatures = popupCardElement.querySelector('.popup__features')
  let cardCreatFeatures = function (i) {
    let element = document.createElement('li')
    element.classList.add('popup__feature')
    element.textContent = FEATURES[i]
    switch (FEATURES[i]) {
      case 'wifi':
        element.classList.add('popup__feature--wifi')
        break
      case 'dishwasher':
        element.classList.add('popup__feature--dishwasher')
        break
      case 'parking':
        element.classList.add('popup__feature--parking')
        break
      case 'washer':
        element.classList.add('popup__feature--washer')
        break
      case 'elevator':
        element.classList.add('popup__feature--elevator')
        break
      case  'conditioner':
        element.classList.add('popup__feature--conditioner')
    }
    return element
  }

  for(let i = 0; i <= FEATURES.length - 1; i ++){

    CardListFeatures.appendChild(cardCreatFeatures(i))
  }

  let typeHousing = function() {
    switch (offer.type) {
      case 'palace':
        offer.type = 'Дворец'
        break
      case 'flat':
        offer.type = 'Квартира'
        break
      case 'house':
        offer.type = 'Дом';
        break
      case 'bungalow':
        offer.type = 'Бунгало';
    }
    return offer.type
  }

  popupCardElement.querySelector('.popup__type').textContent = typeHousing()
  popupCardElement.querySelector('.popup__text--capacity').textContent = offer.rooms + ' комнаты для ' + offer.guests
  popupCardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.checkin + ' , выезд до ' + offer.checkout
  popupCardElement.querySelector('.popup__description').textContent = offer.description

  let CardList = popupCardElement.querySelector('.popup__photos')

  let cardCreat = function (tagName, className, i) {
    let element = document.createElement(tagName)
    element.classList.add(className)
    element.src =  PHOTOS[i]
    return element
  }

  for(let i = 0; i <= PHOTOS.length - 1; i++) {
    CardList.appendChild(cardCreat('img', 'popup__photo', i))
  }

  popupCard.appendChild(popupCardElement)
});

popupAvatar.forEach((author) => {
  popupCardElement.querySelector('.popup__avatar').src = 'img/avatars/user' + author.avatar + '.png'
})



