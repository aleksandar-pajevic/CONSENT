function whosActive(e) {
  let elems = document.querySelector('.activeNav');
  if (elems !== null) {
    elems.classList.remove('activeNav');
  }
  e.target.className = 'activeNav';
}

function homeFocus() {
  document.getElementById('home').classList.add('activeNav');
}

function whatWeOfferFocus() {
  document.getElementById('whatWeOffer').classList.add('activeNav');
}

function ourTeamFocus() {
  document.getElementById('ourTeam').classList.add('activeNav');
}

function contactFocus() {
  document.getElementById('contact').classList.add('activeNav');
}
