/* eslint-disable no-unused-vars */
import {getRandomLengthMass} from'./util.js'

//ОПИСАНИЕ АВТОРА
const authorNumber = function(min, max){
  if(min >= max || max <= min || min < 0 || max < 0) {
    throw(new Error('Ошибка - введите числа корректно'))
  }
  return String('0' + (Math.floor(Math.random() * (max - min) + min)));
}

const authorCount = 10;

const creatAuthor = function() {
  return {
    avatar: authorNumber(1, 8),
  }
}

const author = new Array(authorCount).fill(null).map(() => creatAuthor());

//СОДЕРЖАНИЕ ОБЪЯВЛЕНИЯ
const Title = [
  'Пентхаус',
  'Студия',
  'Комната',
]

const Address = [
  'location.x, location.y',
]

const autoNumber = function(min, max){
  if(min >= max || max <= min || min < 0 || max < 0) {
    throw(new Error('Ошибка - введите числа корректно'))
  }
  return Math.floor(Math.random() * (max - min) + min);
}

const Type = [
  'palace',
  'flat',
  'house',
  'bungalow',
]

const Checkin = [
  '12:00',
  '13:00',
  '14:00',
]

const Checkout = [
  '12:00',
  '13:00',
  '14:00',
]

const Features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
]

const Description = [
  'просторная',
  'уютная',
  'красивая',
  'халупа',
]

const Photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
]

const offerCount = 10

const creatOffer = function() {
  return {
    title: getRandomLengthMass(Title),
    address: getRandomLengthMass(Address),
    price: autoNumber(0, 99999),
    type: getRandomLengthMass(Type),
    rooms: autoNumber(0, 99999),
    guests: autoNumber(0, 99999),
    checkin: getRandomLengthMass(Checkin),
    checkout: getRandomLengthMass(Checkout),
    features: getRandomLengthMass(Features),
    description: getRandomLengthMass(Description),
    photos: getRandomLengthMass(Photos),
  }
}

const offer = new Array(offerCount).fill(null).map(() => creatOffer());

//ЛОКАЦИЯ
const randomLocation = function(min, max){
  if(min >= max || max <= min || min < 0 || max < 0) {
    throw(new Error('Ошибка - введите числа корректно'))
  }
  return  Math.random() * (max - min) + min;
}

const locationCount = 10

const creatLocation = function() {
  return {
    x: randomLocation(35.65000, 35.70000),
    y: randomLocation(139.70000, 139.80000),
  }
}

const locations = new Array(locationCount).fill(null).map(() => creatLocation());

