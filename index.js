function whosActive(e) {
  let elems = document.querySelector('.activeNav');
  if (elems !== null) {
    elems.classList.remove('activeNav');
  }
  e.target.className = 'activeNav';
}

function makeMeFocus() {
  document.getElementById('home').classList.add('activeNav');
}
