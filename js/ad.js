import {getRandomLengthMass} from'./util.js'

//ОПИСАНИЕ АВТОРА
const authorNumber = function(min, max){
  if(min >= max || max <= min || min < 0 || max < 0) {
    throw(new Error('Ошибка - введите числа корректно'))
  }
  return String('0' + (Math.floor(Math.random() * (max - min) + min)));
};

const authorCount = 1;

const creatAuthor = function() {
  return {
    avatar: authorNumber(1, 8),
  }
};

const author = new Array(authorCount).fill(null).map(() => creatAuthor());

export {author};

//СОДЕРЖАНИЕ ОБЪЯВЛЕНИЯ
const TITILE = [
  'Пентхаусssssssssss',
  'Студияssssssssss',
  'Комнатаsssssssss',
];

const ADDRES = [
  'location.x, location.y',
];

const autoNumber = function(min, max){
  if(min >= max || max <= min || min < 0 || max < 0) {
    throw(new Error('Ошибка - введите числа корректно'))
  }
  return Math.floor(Math.random() * (max - min) + min);
};

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

export {FEATURES};

const DESCRIPTION = [
  'просторная',
  'уютная',
  'красивая',
  'халупа',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

export {PHOTOS}

const offerCount = 1;

const creatOffer = function() {
  return {
    title: getRandomLengthMass(TITILE),
    address: getRandomLengthMass(ADDRES),
    price: autoNumber(0, 99999),
    type: getRandomLengthMass(TYPE),
    rooms: autoNumber(0, 99999),
    guests: autoNumber(0, 99999),
    checkin: getRandomLengthMass(CHECKIN),
    checkout: getRandomLengthMass(CHECKOUT),
    features: getRandomLengthMass(FEATURES),
    description: getRandomLengthMass(DESCRIPTION),
    photos: getRandomLengthMass(PHOTOS),
  }
};

const offer = new Array(offerCount).fill(null).map(() => creatOffer());

export {offer};

//ЛОКАЦИЯ
const randomLocation = function(min, max){
  if(min >= max || max <= min || min < 0 || max < 0) {
    throw(new Error('Ошибка - введите числа корректно'))
  }
  return  Math.random() * (max - min) + min;
};

const locationCount = 1;

const creatLocation = function() {
  return {
    x: randomLocation(35.65000, 35.70000),
    y: randomLocation(139.70000, 139.80000),
  }
};

const locations = new Array(locationCount).fill(null).map(() => creatLocation());

export {locations};

