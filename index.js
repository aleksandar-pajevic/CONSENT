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

function ourTeamFocus() {
  document.getElementById('ourTeam').classList.add('activeNav');
}

function contactFocus() {
  document.getElementById('contact').classList.add('activeNav');
}
function csrFocus() {
  document.getElementById('CSR').classList.add('activeNav');
}

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
