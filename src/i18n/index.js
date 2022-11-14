import i18n from 'i18next'
import {  initReactI18next } from "react-i18next"
import PTBR from './locales/pt-br.json'
import ENUS from './locales/en-us.json'

const resources = {
    'pt-BR': PTBR,
    'en-us': ENUS
}

i18n.use(initReactI18next).init({
    resources, // Load the PT and BR const json created before
    lng: navigator.language, //Load the defult browser language
    interpolation:{
        escapeValue:false, // Protection against XSS attacks
    }
})

export default i18n