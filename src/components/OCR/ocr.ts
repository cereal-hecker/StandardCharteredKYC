import Tesseract from 'tesseract.js';


const extractTextAndSearchPattern = (imagePath, option) => {

  const patterns = {
    "aadhar": /\d{4} \d{4} \d{4}/,
    "pan": /\w{5}\d{4}\w{1}/
  }
  const pattern = patterns[option];

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
        reject(`No ${option} number found`);
      }
    }).catch(error => {
      reject(error);
    });
  });
};

export default extractTextAndSearchPattern;
