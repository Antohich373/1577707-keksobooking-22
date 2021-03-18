import {author} from './ad.js'
import {offer} from './ad.js'
import {PHOTOS} from './ad.js'
import {FEATURES} from './ad.js'
// import {locations} from './ad.js'

let popupCardTemplate = document.querySelector('#card').content.querySelector('.popup');

const popupCards = offer;
const popupAvatar = author;

let popupCardElement = popupCardTemplate.cloneNode(true);

let CardListFeatures = popupCardElement.querySelector('.popup__features');

let fitears = function(element, fiters) {
  switch (fiters) {
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
};

let cardCreatFeatures = function(i) {
  let element = document.createElement('li')
  element.classList.add('popup__feature')
  element.textContent = fitears(element, FEATURES[i])
  return element
};

let typeHousing = function(type) {
  switch (type) {
    case 'palace':
      type = 'Дворец'
      break
    case 'flat':
      type = 'Квартира'
      break
    case 'house':
      type = 'Дом';
      break
    case 'bungalow':
      type = 'Бунгало';
  }
  return type
};

let CardList = popupCardElement.querySelector('.popup__photos');
let cardCreat = function (tagName, className, i) {
  let element = document.createElement(tagName)
  element.classList.add(className)
  element.src =  PHOTOS[i]
  return element
};

popupCards.forEach((offer) => {
  popupCardElement.querySelector('.popup__title').textContent = offer.title;
  popupCardElement.querySelector('.popup__text--address').textContent = offer.address;
  popupCardElement.querySelector('.popup__text--price').textContent = offer.price + ' ₽/ночь';

  for(let i = 0; i <= FEATURES.length - 1; i ++){
    CardListFeatures.appendChild(cardCreatFeatures(i))
  }

  popupCardElement.querySelector('.popup__type').textContent = typeHousing(offer.type);
  popupCardElement.querySelector('.popup__text--capacity').textContent = offer.rooms + ' комнаты для ' + offer.guests;
  popupCardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.checkin + ' , выезд до ' + offer.checkout;
  popupCardElement.querySelector('.popup__description').textContent = offer.description;

  for(let i = 0; i <= PHOTOS.length; i++) {
    CardList.appendChild(cardCreat('img', 'popup__photo', i))
  }

});

export {popupCardElement};

popupAvatar.forEach((author) => {
  popupCardElement.querySelector('.popup__avatar').src = 'img/avatars/user' + author.avatar + '.png';
});



