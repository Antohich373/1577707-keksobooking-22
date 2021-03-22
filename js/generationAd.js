// import {PHOTOS} from './ad.js'
// import {FEATURES} from './ad.js'
// import {locations} from './ad.js'

let popupCardTemplate = document.querySelector('#card').content.querySelector('.popup');

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



const renderPopupCards = function(popupCards){
  popupCards.forEach(({offer}) => {
    popupCardElement.querySelector('.popup__title').textContent = offer.title;
    popupCardElement.querySelector('.popup__text--address').textContent = offer.address;
    popupCardElement.querySelector('.popup__text--price').textContent = offer.price + ' ₽/ночь';

    let cardCreatFeatures = function(i) {
      let element = document.createElement('li')
      element.classList.add('popup__feature')
      element.textContent = fitears(element, offer.features[i])
      return element
    };

    for(let i = 0; i <= offer.features.length - 1; i ++){
      CardListFeatures.appendChild(cardCreatFeatures(i))
    }

    popupCardElement.querySelector('.popup__type').textContent = typeHousing(offer.type);
    popupCardElement.querySelector('.popup__text--capacity').textContent = offer.rooms + ' комнаты для ' + offer.guests + ' гостей';
    popupCardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.checkin + ' , выезд до ' + offer.checkout;
    popupCardElement.querySelector('.popup__description').textContent = offer.description;
    let CardList = popupCardElement.querySelector('.popup__photos');

    let cardCreat = function (tagName, className, i) {
      let element = document.createElement(tagName)
      element.classList.add(className)
      element.src =  offer.photos[i]
      return element
    };

    for(let i = 0; i <= offer.photos.length; i++) {
      CardList.appendChild(cardCreat('img', 'popup__photo', i))
    }
  });
}
export {renderPopupCards};
export {popupCardElement};

const renderPopupCardsAvatar = function(popupAvatar){
  popupAvatar.forEach(({author}) => {
    popupCardElement.querySelector('.popup__avatar').src = 'img/avatars/user' + author.avatar + '.png';
  });
}
export {renderPopupCardsAvatar};


