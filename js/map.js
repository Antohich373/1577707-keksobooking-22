/* global L:readonly */
// import {popupCardElement} from './generationAd.js'
import {renderPopupCards} from './generationAd.js'

let formChild = document.querySelector('.ad-form')

let formChildItem = formChild.children

for(let i = 0; i <= formChildItem.length - 1; i++){
  formChildItem[i].setAttribute('disabled', 'disabled')
}
formChild.classList.add('ad-form--disabled')

const map = L.map('map-canvas')
  .on('load', () => {
    for(let i = 0; i <= formChildItem.length - 1; i++){
      formChildItem[i].removeAttribute('disabled', 'disabled')
    }
    formChild.classList.remove('ad-form--disabled')
  })
  .setView({
    lat: 35.681700,
    lng:  139.753882,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker(
  {
    lat: 35.681700,
    lng: 139.753882,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
marker.addTo(map);


marker.on('moveend', (evt) => {
  return evt.target.getLatLng();
});

const renderPopupCardsLocation = function(popupLocation){
  popupLocation.forEach(({location, offer, author}) => {
    const icon = L.icon({
      iconUrl: '../img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const lng = location.lng
    const lat = location.lat

    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon,
      },
    );

    marker
      .addTo(map)
      .bindPopup(
        renderPopupCards(offer, author),
      );
  });
}

export {renderPopupCardsLocation}
