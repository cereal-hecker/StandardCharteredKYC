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
            "Place your pan card inside the red rectangle":"Place your pan card inside the rectangle",
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
            "Aadhar Card": "आधार कार्ड",
            "Pan Card": "पैन कार्ड",
            "Signature": "हस्ताक्षर",
            "Done": "हो गया",
            "Aadhaar Card Upload":"आधार कार्ड अपलोड",
            "Place your aadhaar card inside the rectangle":"अपने आधार कार्ड को आयत के अंदर रखें",
            "Capture Frame":"अपने आधार कार्ड को आयत के अंदर रखें",
            "Pan Card Upload":"पैन कार्ड अपलोड",
            "Place your Pan card inside the red frame." : "लाल फ्रेम के अंदर अपना पैन कार्ड रखें",
            "Signature Upload":"हस्ताक्षर अपलोड",
            "Place your signature inside the rectangle":"अपना हस्ताक्षर आयत के अंदर रखें",
            "Enter your Email":"अपना ईमेल दर्ज करें",
            "Enter your password":"अपना कूटशब्द भरें",
            "Continue" : "आगे बढ़ें",
            "Standard Chartered's" : "स्टैंडर्ड चार्टर्ड",
            "portal" : "पोर्टल",
            "Streamline your identity verification process with our secure and efficient online KYC solution." : "हमारे सुरक्षित और कुशल ऑनलाइन KYC समाधान के साथ अपनी पहचान सत्यापन प्रक्रिया को संगठित करें",
            "Your KYC process has been successfully completed. Please check your email for further instructions." : "आपकी KYC प्रक्रिया सफलतापूर्वक पूरी हो गई है। कृपया आगे के निर्देशों के लिए अपने ईमेल की जांच करें।",
            "Congratulations!" : "बधाई हो!",
            "Ensure your face is centered and well-lit within the red frame." : "सुनिश्चित करें कि आपका चेहरा लाल फ्रेम के भीतर केंद्रित और अच्छी तरह से प्रकाशित है।",
            "Take photo" : "तस्वीर लें",
            "Retake" : "फिर से लें",
            "Place your aadhaar card inside the red frame." : "लाल फ्रेम के अंदर अपना आधार कार्ड रखें।",
            "Aadhaar card was not detected, please retake the photo." : "आधार कार्ड नहीं पहचाना गया, कृपया फोटो फिर से लें।",
            "Save and continue" : "सहेजें और जारी रखें",
        }
    }
}

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources: translationJSON,
    lng: 'en'
})


export default i18n;
