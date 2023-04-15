import en from '../../src/i18n/locales/en/translation.json'
import ua from '../../src/i18n/locales/ua/translation.json'

import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'


const resources = {
    en: {
        translation: en,
    },
    ua: {
        translation: ua,
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: JSON.parse(localStorage.getItem('language')),
        fallbackLng: 'en'
    })

export default i18n;