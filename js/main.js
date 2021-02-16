//ОПИСАНИЕ АВТОРА
const authorNumber = function(min, max){
  if(min >= max || max <= min || min < 0 || max < 0) {
    throw(new Error('Ошибка - введите числа корректно'))
  }
  return String('0' + (Math.floor(Math.random() * (max - min) + min)));
}

const authorCount = 10;

const author = function() {
  return {
    avatar: authorNumber(1, 8),
  }
}

const similarAuthor = new Array(authorCount).fill(null).map(() => author());

//СОДЕРЖАНИЕ ОБЪЯВЛЕНИЯ
const Title = [
  'Пентхаус',
  'Студия',
  'Комната',
]

const Address = [
  'location.x, location.y',
]

const getRandomArrayElement = function(element) {
  return element[_.random(0, element.length -1)]
}

//Прайс - стоимость
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

const offer = function() {
  return {
    title: getRandomArrayElement(Title),
    address: getRandomArrayElement(Address),
    price: autoNumber(0, 99999),
    type: getRandomArrayElement(Type),
    rooms: autoNumber(0, 99999),
    guests: autoNumber(0, 99999),
    checkin: getRandomArrayElement(Checkin),
    checkout: getRandomArrayElement(Checkout),
    features: getRandomArrayElement(Features),
    description: getRandomArrayElement(Description),
    photos: getRandomArrayElement(Photos),
  }
}

let similarOffer = new Array(offerCount).fill(null).map(() => offer());

//ЛОКАЦИЯ
const randomLocation = function(min, max){
  if(min >= max || max <= min || min < 0 || max < 0) {
    throw(new Error('Ошибка - введите числа корректно'))
  }
  return  Math.random() * (max - min) + min;
}

const locationCount = 10

const lokation = function() {
  return {
    x: randomLocation(35.65000, 35.70000),
    y: randomLocation(139.70000, 139.80000),
  }
}

let similarLokation = new Array(locationCount).fill(null).map(() => lokation());
