let form = document.getElementById('contactForm')
function submitForm () {
  console.log('form =>', form)
  form.submit()
  form.reset()
  return false
}

//LANGUAGES

// let data = {
//   languages: {
//     gb: {
//       strings: {
//         navHome: 'Home',
//         navTeam: 'who we are',
//         navOffer: 'our Services',
//         navCSR: 'CSR',
//         navContact: 'contact us',
//         homeHeading: `To succeed, you must love what you do and do that effectively. Passion helps in being efficient. An effort is worthwhile if you don't give up on something you've set your mind to. There is always room at the top.`,
//         homeSpanFirst: `The only limits are those that we set for ourselves.`,
//         homeSpanSecond: `"Geniuses are the people who you feel no effort standing next to.  That's who geniuses are."`,
//         homeSpanThird: 'Paolo Sorrentino',
//         ourTeamHeading: 'Who we are',
//         ourTeamParagraph: `Consent is a team of experts in economics, legal and technical sciences. Forming a team for each project ensures certainty that we will accomplish it together, believing in success even when we are out of breath. Our clients today become a part of our team tomorrow.`,
//         ourTeamSlogan: 'We work diligently and a little more, because that little more has a value greater than everything else.',
//         contactUsBtn: 'Ask us',
//         slideHeadingFirst: 'Business management',
//         slideSubHeadingFirst: 'Make the right move',
//         slideDescriptionFirst: `Our knowledge, skills and long term international experience are your security.  We advise you what to do and how to act in an entrepreneurial environment. In a fast changing global economy these pieces of advice are your friends. If we stay together that means making progress and through such cooperation a success. To convince you how reliable we are, you need to trust us.`,
//         slideHeadingSecond: 'Investment counselling',
//         slideSubHeadingSecond: 'We share our knowledge',
//         slideDescriptionSecond: 'Accomplished infrastructural, industrial, commercial and residential investments worth more than a billion dollars tell you that there is no uncertainty for us.  We accept challenges enthusiastically, because they give a meaning to life. Acquainted with the investment process architecture, we know how to shape a pleasant living and working environment.',
//         slideHeadingThird: 'Project management',
//         slideSubHeadingThird: `Satisfy all stakeholders' expectations`,
//         slideDescriptionThird: `Project management and managing by projects are core of our business. Every project we have is a path to be crossed in several steps, full of challenges, temptations and expectations. Our role is to make you feel safe during that journey, to make you achieve your goals and to embark on a new journey with us. Those are your projects. That is the essence of your business.`,
//         slideHeadingFourth: 'Total support',
//         slideSubHeadingFourth: 'Enjoy your journey and climb to the top',
//         slideDescriptionFourth: 'Supporting your business implies legal shaping and lawful conduct as well. Our commercial and business law knowledge and practice are guarantees that your affairs will be managed properly in property relations, corporate law, contracting, conduction of administrative proceedings and representing in front of the competent authorities and business partners.',
//         csrHeading: `We don't strive to be successful only. With a wish to make a difference, we make added value together. Business is like life, continuous adjustment to the environment.`,
//         csrDesription: 'Our business concept is built on CSR. We are an indispensable part of the public debate on the purpose of doing business and an integral part of a new and sustainable business model. CSR is our philosophy and a scientific research field, for your benefit and for the good of the entire society.',
//         contactHeadingOne: 'Ask a question',
//         contactHeadingTwo: 'Your information and a question',
//         contactFormBtn: 'Send',
//         contactHeadingThree: 'Other way',
//       },
//     },
//     rs: {
//       strings: {
//         navHome: '',
//         navTeam: '',
//         navOffer: '',
//         navCSR: '',
//         navContact: '',
//         homeHeading: '',
//         homeSpanFirst: '',
//         ourTeamHeading: '',
//         ourTeamParagraph: '',
//         ourTeamSlogan: '',
//         contactUsBtn: '',
//         slideHeadingFirst: '',
//         slideHeadingSecond: '',
//         slideHeadingThird: '',
//         slideHeadingFourth: '',
//         slideDescriptionFirst: '',
//         slideDescriptionSecond: '',
//         slideDescriptionThird: '',
//         slideDescriptionFourth: '',
//         csrHeading: '',
//         csrDesription: '',
//         contactHeadingOne: '',
//         contactHeadingTwo: '',
//         contactFormBtn: '',
//         contactHeadingThree: '',
//       },
//     },
//     it: {
//       strings: {
//         navHome: '',
//         navTeam: '',
//         navOffer: '',
//         navCSR: '',
//         navContact: '',
//         homeHeading: '',
//         homeSpanFirst: '',
//         ourTeamHeading: '',
//         ourTeamParagraph: '',
//         ourTeamSlogan: '',
//         contactUsBtn: '',
//         slideHeadingFirst: '',
//         slideHeadingSecond: '',
//         slideHeadingThird: '',
//         slideHeadingFourth: '',
//         slideDescriptionFirst: '',
//         slideDescriptionSecond: '',
//         slideDescriptionThird: '',
//         slideDescriptionFourth: '',
//         csrHeading: '',
//         csrDesription: '',
//         contactHeadingOne: '',
//         contactHeadingTwo: '',
//         contactFormBtn: '',
//         contactHeadingThree: '',
//       },
//     },
//     ru: {
//       strings: {
//         navHome: '',
//         navTeam: '',
//         navOffer: '',
//         navCSR: '',
//         navContact: '',
//         homeHeading: '',
//         homeSpanFirst: '',
//         ourTeamHeading: '',
//         ourTeamParagraph: '',
//         ourTeamSlogan: '',
//         contactUsBtn: '',
//         slideHeadingFirst: '',
//         slideHeadingSecond: '',
//         slideHeadingThird: '',
//         slideHeadingFourth: '',
//         slideDescriptionFirst: '',
//         slideDescriptionSecond: '',
//         slideDescriptionThird: '',
//         slideDescriptionFourth: '',
//         csrHeading: '',
//         csrDesription: '',
//         contactHeadingOne: '',
//         contactHeadingTwo: '',
//         contactFormBtn: '',
//         contactHeadingThree: '',
//       },
//     },
//   },
// };

function setLocStorLang (string) {
  localStorage.setItem('selectedLanguage', string)
}

function changeFlag (selectedLang) {
  let flag = document.getElementById('flag')
  let oldFlagClass = flag.classList.value.toString().split(' ')
  // console.log('oldFlagClass', oldFlagClass);
  flag.classList.remove(oldFlagClass[1])
  let newFlag = flag.classList.add(`flag-icon-${selectedLang}`)
  // console.log('newFlag', newFlag);
}

function changeLanguage () {
  // console.log('local storage on load', localStorage);
  if (localStorage.length <= 0) {
    setLocStorLang('gb')
  } else {
    let select = document.getElementById('language')
    let language = select.options[select.selectedIndex].value
    setLocStorLang(language)
    let selectedLang = localStorage.getItem('selectedLanguage')
    // console.log('locale storage', typeof selectedLang);

    changeFlag(selectedLang)
    nameInput.setAttribute(
      'placeholder',
      `${data.languages[`${selectedLang}`].strings['nameLabel']}`
    )
    emailInput.setAttribute(
      'placeholder',
      `${data.languages[`${selectedLang}`].strings['emailLabel']}`
    )
    subjectInput.setAttribute(
      'placeholder',
      `${data.languages[`${selectedLang}`].strings['subjectLabel']}`
    )
    messageInput.setAttribute(
      'placeholder',
      `${data.languages[`${selectedLang}`].strings['messageLabel']}`
    )

    document.querySelectorAll('[data-key]').forEach(element => {
      // console.log('element', element);
      let key = element.getAttribute('data-key')
      // console.log('key', key);
      if (key) {
        element.textContent = data.languages[`${selectedLang}`].strings[key]
      }
    })
  }
}
let nameInput = document.getElementById('name')
let emailInput = document.getElementById('email')
let subjectInput = document.getElementById('subject')
let messageInput = document.getElementById('message')

function onLoadLanguage () {
  // console.log('local storage on load', localStorage);
  if (localStorage.length <= 0) {
    setLocStorLang('gb')
  } else {
    let selectedLang = localStorage.getItem('selectedLanguage')
    // console.log('locale storage', typeof selectedLang);

    changeFlag(selectedLang)
    document
      .querySelectorAll(`[value=${selectedLang}]`)[0]
      .setAttribute('selected', '')
    nameInput.setAttribute(
      'placeholder',
      `${data.languages[`${selectedLang}`].strings['nameLabel']}`
    )
    emailInput.setAttribute(
      'placeholder',
      `${data.languages[`${selectedLang}`].strings['emailLabel']}`
    )
    subjectInput.setAttribute(
      'placeholder',
      `${data.languages[`${selectedLang}`].strings['subjectLabel']}`
    )
    messageInput.setAttribute(
      'placeholder',
      `${data.languages[`${selectedLang}`].strings['messageLabel']}`
    )

    document.querySelectorAll('[data-key]').forEach(element => {
      // console.log('element', element);
      let key = element.getAttribute('data-key')
      // console.log('key', key);
      if (key) {
        element.textContent = data.languages[`${selectedLang}`].strings[key]
      }
    })
  }
}
