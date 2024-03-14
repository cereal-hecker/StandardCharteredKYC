import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const translationJSON = {
    en:{
        translation:{
            "Personal Details":"Personal Details",
            "Enter your first name":"Enter your first name",
            "Enter your last name":'Enter your last name',
            "Enter your email":"Enter your email",
            "Enter your phone number":"Enter your phone number",
            "Save & Continue":"Save & Continue"
        }
    },
    hi:{
        translation:{
            "Personal Details":"व्यक्तिगत विवरण",
            "Enter your first name":"अपना पहला नाम दर्ज करें",
            "Enter your last name":'अपना अंतिम नाम दर्ज करें',
            "Enter your email":"अपना ईमेल दर्ज करें",
            "Enter your phone number":"अपना फोन नंबर डालें",
            "Save & Continue":"सहेजें जारी रखें"
        }
    }
}

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources: translationJSON,
    lng: 'en'
})


export default i18n;
