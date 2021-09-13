//LANGUAGE CHANGE

import langData from './languagesData.json' assert { type: 'json' };

console.log('lang data =>', langData);

function applyStrings() {
  document.querySelectorAll('[data-key]').forEach((element) => {
    console.log('element', element);
    let key = element.getAttribute('data-key');
    console.log('key', key);
    if (key) {
      element.textContent = langData.languages['sr'].strings[key];
    }
  });
}

applyStrings();
