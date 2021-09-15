//LANGUAGES

let data = {
  languages: {
    gb: {
      strings: {
        navHome: 'Home',
        navOffer: 'What We Offer',
        navTeam: 'Our Team',
        navContact: 'Contact',
        slideHeadingFirst: 'With You side-by-side All The Way',
        slideBtnFirst: 'Our Group',
        slideDescriptionFirst:
          'Pragmatism and communication are essential parts of our DNA. That’s why our experts work with your teams as close to the operational realities as they can get.',
        slideHeadingSecond: 'Adding Our Talents To Your Department',
        slideBtnSecond: 'What We Offer',
        slideDescriptionSecond:
          'Performance management, operational support and finance solutions: our services cover most of the issues that can come up within finance departments.',
        slideHeadingThird: 'Working Together With the Same Goal',
        slideBtnThird: 'Join Our Team',
        slideDescriptionThird:
          'We’re looking for enthusiastic, motivated candidates who want to focus on client success and want to be part of a dynamic and ambitious firm that promises plenty of adventure.',
        wwoMainHeading: 'our area of expertise',
        ourTeamHeading: 'who we are',
        contactHeadingOne: 'connect',
        contactHeadingTwo: 'Get in contact',
        contactHeadingThree: 'Other way',
      },
    },
    rs: {
      strings: {
        navHome: 'Početna',
        navOffer: 'Šta Nudimo',
        navTeam: 'Naš Tim',
        navContact: 'Kontakt',
        slideHeadingFirst: 'Sa Vama rame-uz-rame Celim Putem',
        slideBtnFirst: 'Naša Grupa',
        slideDescriptionFirst:
          'Pragmatizam i komunikacija su bitni delovi naše DNK. Zato naši stručnjaci rade sa vašim timovima što je moguće bliže operativnoj stvarnosti.',
        slideHeadingSecond: 'Dodajte naše talenate vašem timu',
        slideBtnSecond: 'Šta Nudimo',
        slideDescriptionSecond:
          'Upravljanje učinkom, operativna podrška i finansijska rešenja: naše usluge pokrivaju većinu pitanja koja se mogu pojaviti u odeljenjima za finansije.',
        slideHeadingThird: 'Radimo Zajedno Sa Istim Ciljem',
        slideBtnThird: 'Pridruži Nam Se',
        slideDescriptionThird:
          'Tražimo entuzijastične, motivisane kandidate koji se žele fokusirati na uspeh klijenata i žele da budu deo dinamične i ambiciozne firme koja obećava puno avanture.',
        wwoMainHeading: 'Naša polja ekspertize',
        ourTeamHeading: 'Ko smo mi',
        contactHeadingOne: 'Povežite se',
        contactHeadingTwo: 'Stupite u kontakt',
        contactHeadingThree: 'Drugi način',
      },
    },
    it: {
      strings: {
        navHome: 'Home',
        navOffer: 'What We Offer',
        navTeam: 'Our Team',
        navContact: 'Contact',
        slideHeadingFirst: 'With You side-by-side All The Way',
        slideBtnFirst: 'Our Group',
        slideDescriptionFirst:
          'Pragmatism and communication are essential parts of our DNA. That’s why our experts work with your teams as close to the operational realities as they can get.',
        slideHeadingSecond: 'Adding Our Talents To Your Department',
        slideBtnSecond: 'What We Offer',
        slideDescriptionSecond:
          'Performance management, operational support and finance solutions: our services cover most of the issues that can come up within finance departments.',
        slideHeadingThird: 'Working Together With the Same Goal',
        slideBtnThird: 'Join Our Team',
        slideDescriptionThird:
          'We’re looking for enthusiastic, motivated candidates who want to focus on client success and want to be part of a dynamic and ambitious firm that promises plenty of adventure.',
        wwoMainHeading: 'our area of expertise',
        ourTeamHeading: 'who we are',
        contactHeadingOne: 'connect',
        contactHeadingTwo: 'Get in contact',
        contactHeadingThree: 'Other way',
      },
    },
    ru: {
      strings: {
        navHome: 'Početna',
        navOffer: 'Šta Nudimo',
        navTeam: 'Naš Tim',
        navContact: 'Kontakt',
        slideHeadingFirst: 'Sa Vama rame-uz-rame Celim Putem',
        slideBtnFirst: 'Naša Grupa',
        slideDescriptionFirst:
          'Pragmatizam i komunikacija su bitni delovi naše DNK. Zato naši stručnjaci rade sa vašim timovima što je moguće bliže operativnoj stvarnosti.',
        slideHeadingSecond: 'Dodajte naše talenate vašem timu',
        slideBtnSecond: 'Šta Nudimo',
        slideDescriptionSecond:
          'Upravljanje učinkom, operativna podrška i finansijska rešenja: naše usluge pokrivaju većinu pitanja koja se mogu pojaviti u odeljenjima za finansije.',
        slideHeadingThird: 'Radimo Zajedno Sa Istim Ciljem',
        slideBtnThird: 'Pridruži Nam Se',
        slideDescriptionThird:
          'Tražimo entuzijastične, motivisane kandidate koji se žele fokusirati na uspeh klijenata i žele da budu deo dinamične i ambiciozne firme koja obećava puno avanture.',
        wwoMainHeading: 'Naša polja ekspertize',
        ourTeamHeading: 'Ko smo mi',
        contactHeadingOne: 'Povežite se',
        contactHeadingTwo: 'Stupite u kontakt',
        contactHeadingThree: 'Drugi način',
      },
    },
  },
};

function setLocStorLang(string) {
  localStorage.setItem('selectedLanguage', string);
}

function changeFlag(selectedLang) {
  let flag = document.getElementById('flag');
  let oldFlagClass = flag.classList.value.toString().split(' ');
  // console.log('oldFlagClass', oldFlagClass);
  flag.classList.remove(oldFlagClass[1]);
  let newFlag = flag.classList.add(`flag-icon-${selectedLang}`);
  // console.log('newFlag', newFlag);
}

function changeLanguage() {
  // console.log('local storage on load', localStorage);
  if (localStorage.length <= 0) {
    setLocStorLang('gb');
  } else {
    let select = document.getElementById('language');
    let language = select.options[select.selectedIndex].value;
    setLocStorLang(language);
    let selectedLang = localStorage.getItem('selectedLanguage');
    // console.log('locale storage', typeof selectedLang);

    changeFlag(selectedLang);

    document.querySelectorAll('[data-key]').forEach((element) => {
      // console.log('element', element);
      let key = element.getAttribute('data-key');
      // console.log('key', key);
      if (key) {
        element.textContent = data.languages[`${selectedLang}`].strings[key];
      }
    });
  }
}

function onLoadLanguage() {
  // console.log('local storage on load', localStorage);
  if (localStorage.length <= 0) {
    setLocStorLang('gb');
  } else {
    let selectedLang = localStorage.getItem('selectedLanguage');
    // console.log('locale storage', typeof selectedLang);

    changeFlag(selectedLang);
    document
      .querySelectorAll(`[value=${selectedLang}]`)[0]
      .setAttribute('selected', '');
    document.querySelectorAll('[data-key]').forEach((element) => {
      // console.log('element', element);
      let key = element.getAttribute('data-key');
      // console.log('key', key);
      if (key) {
        element.textContent = data.languages[`${selectedLang}`].strings[key];
      }
    });
  }
}
