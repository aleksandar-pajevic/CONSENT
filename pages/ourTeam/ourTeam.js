let cards = document.querySelectorAll('.card');
let front = document.getElementsByClassName('front');
let back = document.getElementsByClassName('back');

console.log('front', front);
console.log('cards', cards);

for (let i = 0; i < cards.length; i++) {
  // cards[i].classList.add('rotate');
  console.log('this work');
}
function chechRotation() {}
chechRotation();
// let chechRotation = function () {
//   if (card.classList.contains('rotated')) {
//     front.classList.remove('rotate-front');
//     back.classList.remove('rotate-back');
//   } else {
//     front.classList.add('rotate-front');
//     back.classList.add('rotate-back');
//   }
// };

// card.addEventListener('click', chechRotation());
