import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TextFieldCustom from '../../components/TextField';
import TranslateButton from '../../components/Translations/translateButton';
import '../../components/Translations/translations';

export default function PersonalDetails() {
    const { t } = useTranslation();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();

    const handleSaveAndContinue = () => {
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Email:", email);
        navigate('/aadharcard');
    };

    return (
        <div className="flex px-16 pt-20 gap-10">
            <div className='w-1/2'>
                <img src="/assets/images/Rafiki.png" alt="logo" />
            </div>
            <div className="w-1/2">
                <h1 className="text-4xl font-bold mb-16">{t('Personal Details')}</h1>
                <div className="grid grid-cols-2 gap-4">
                    <TextFieldCustom
                        heading={t('Enter your first name')}
                        variableName="firstName"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        placeholder="John"
                    />
                    <TextFieldCustom
                        heading={t('Enter your last name')}
                        variableName="lastName"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        placeholder="Doe"
                    />
                    <TextFieldCustom
                        heading={t('Enter your email')}
                        variableName="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="johndoe72@gmail.com"
                    />
                    <TextFieldCustom
                        heading={t('Enter your phone number')}
                        variableName="phoneNumber"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        placeholder="123-456-7890"
                    />
                </div>
                <div className="flex justify-between items-center mt-5">
                  <TranslateButton />
                  <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      onClick={handleSaveAndContinue}
                  >
                      {t('Save & Continue')}
                  </button>
                </div>
            </div>
        </div>
    );
}
