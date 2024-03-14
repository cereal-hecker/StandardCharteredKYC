import Tesseract from 'tesseract.js';

const extractTextAndSearchPattern = (imagePath) => {
  const pattern = /\d{4} \d{4} \d{4}/;

  return new Promise((resolve, reject) => {
    Tesseract.recognize(
      imagePath, 
      'eng',
      {
        logger: m => console.log(m)
      }
    ).then(({ data: { text } }) => {
      console.log(text);
      const search = text.match(pattern);
      if (search) {
        resolve(search[0]);
      } else {
        reject("No Aadhaar number found.");
      }
    }).catch(error => {
      reject(error);
    });
  });
};

export default extractTextAndSearchPattern;
