function opacityInc(overlay) {
  let overlays = document.getElementsByClassName(overlay);

  for (var i = 0; i < overlays.length; i++) {
    overlays[i].style.opacity = '0.5';
  }
}
function opacityDec(overlay) {
  let overlays = document.getElementsByClassName(overlay);

  for (var i = 0; i < overlays.length; i++) {
    overlays[i].style.opacity = '0.4';
  }
}
function whatWeOfferFocus() {
  document.getElementById('whatWeOffer').classList.add('activeNav');
}
