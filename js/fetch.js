import {renderPopupCardsLocation} from './map.js'

import {setUserFormSubmit} from './formUser.js'

const RENDER_CARDS_COUNT = 8

const clearSimilarList = () => {
  const  title = document.getElementById('title');
  const  address = document.getElementById('address');
  const  price = document.getElementById('price');
  const  description = document.getElementById('description');

  title.value = ''
  address.value = ''
  price.value = ''
  description.value = ''
};
export {clearSimilarList}

fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((data) => {
    renderPopupCardsLocation(data.slice(0, RENDER_CARDS_COUNT))
  })

setUserFormSubmit(clearSimilarList)
