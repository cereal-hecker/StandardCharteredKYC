import React, { useState } from 'react';
import i18n from 'i18next';

export default function TranslateButton() {
  const [language, setLanguage] = useState(i18n.language); // Initial language

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'hi' : 'en'; // Toggle between 'en' and 'hi'
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage); // Change the app's language
  };

  return (
    <button onClick={toggleLanguage} style={styles.button}>
        Translate button
      {/* <img 
        style={styles.translate}
        src={require("../assets/images/translate.png")} // Adjust this path as needed
        alt="Translate"
      /> */}
    </button>
  );
}

// Adjusted for web usage
const styles = {
  button: {
    width: '10%', // Example width, adjust as needed
    height: 'auto', // Adjust based on content or explicitly
    padding: '10px', // Add some padding
    border: 'none', // Remove border
    backgroundColor: 'transparent', // Transparent background
    cursor: 'pointer' // Pointer cursor on hover
  },
  translate: {
    width: '100%', // Make the image fill the button
    height: 'auto' // Keep image aspect ratio
  },
};
