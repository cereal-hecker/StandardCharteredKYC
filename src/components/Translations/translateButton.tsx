import React, { useState } from 'react';
import i18n from 'i18next';

export default function TranslateButton() {
  const [language, setLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'hi' : 'en';
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button onClick={toggleLanguage} style={styles.button}>
      <img 
        style={styles.translate}
        src="/assets/images/Translate.png"
        alt="Translate"
      />
    </button>
  );
}

const styles = {
  button: {
    width: '20%', 
    height: 'auto', 
    border: 'none', 
    paddingRight: '30px',
    backgroundColor: 'transparent', 
    cursor: 'pointer' 
  },
  translate: {
    width: '100%', 
    height: 'auto' 
  },
};
