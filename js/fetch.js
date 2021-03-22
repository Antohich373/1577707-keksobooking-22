import {renderPopupCards} from './generationAd.js'
import {renderPopupCardsAvatar} from './generationAd.js'
import {renderPopupCardsLocation} from './map.js'

import {setUserFormSubmit} from './formUser.js'

const RENDER_CARDS_COUNT = 9

const clearSimilarList = () => {
  console.log('тест')
};

fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((data) => {
    renderPopupCards(data.slice(0, RENDER_CARDS_COUNT))
    renderPopupCardsAvatar(data.slice(0, RENDER_CARDS_COUNT))
    renderPopupCardsLocation(data.slice(0, RENDER_CARDS_COUNT))
  })

setUserFormSubmit(clearSimilarList)
