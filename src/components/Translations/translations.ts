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
            "Save & Continue":"Save & Continue",
            "Aadhar Card": "Aadhar Card",
            "Pan Card": "Pan Card",
            "Signature": "Signature",
            "Done": "Done",
            "Aadhaar Card Upload":"Aadhaar Card Upload",
            "Place your aadhaar card inside the rectangle":"Place your aadhaar card inside the rectangle",
            "Capture Frame":"Capture Frame",
            "Pan Card Upload":"Pan Card Upload",
            "Place your pan card inside the rectangle":"Place your pan card inside the rectangle",
            "Signature Upload":"Signature Upload",
            "Place your signature inside the rectangle":"Place your signature inside the rectangle",
            "Enter Your Email":"Enter Your Email",
            "Enter Your Password":"Enter Your Password"
        }
    },
    hi:{
        translation:{
            "Personal Details":"व्यक्तिगत विवरण",
            "Enter your first name":"अपना पहला नाम दर्ज करें",
            "Enter your last name":'अपना अंतिम नाम दर्ज करें',
            "Enter your email":"अपना ईमेल दर्ज करें",
            "Enter your phone number":"अपना फोन नंबर डालें",
            "Save & Continue":"सहेजें जारी रखें",
            "Aadhar Card": "Aadhar Card",
            "Pan Card": "Pan Card",
            "Signature": "Signature",
            "Done": "Done",
            "Aadhaar Card Upload":"Aadhaar Card Upload",
            "Place your aadhaar card inside the rectangle":"Place your aadhaar card inside the rectangle",
            "Capture Frame":"Capture Frame",
            "Pan Card Upload":"Pan Card Upload",
            "Place your pan card inside the rectangle":"Place your pan card inside the rectangle",
            "Signature Upload":"Signature Upload",
            "Place your signature inside the rectangle":"Place your signature inside the rectangle",
            "Enter Your Email":"Enter Your Email",
            "Enter Your Password":"Enter Your Password"
        }
    }
}

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources: translationJSON,
    lng: 'en'
})


export default i18n;
