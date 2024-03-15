import Tesseract from 'tesseract.js';

const mult: number[][] = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
  [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
  [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
  [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
  [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
  [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
  [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
  [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
];

const perm: number[][] = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
  [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
  [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
  [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
  [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
  [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
  [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
];


const checkAadhar = (text : any)=>{
  try {
    let i = text.length;
    let j = 0;
    let x = 0;

    while (i > 0) {
        i -= 1;
        x = mult[x][perm[(j % 8)][parseInt(text[i])]];
        j += 1;
    }
    if (x === 0) {
        return true;
    } else {
        return false;
    }
} catch (error) {
    return false;
}
};

const extractTextAndSearchPattern = (imagePath, option) => {

  const patterns = {
    "aadhar": /\d{4} \d{4} \d{4}/,
    "pan": /[A-Z]{3}[ABCFGHLJPT][A-Z][0-9]{4}[A-Z]{1}/
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
        if (option == "aadhar"){
          if (checkAadhar(search[0]))
            resolve(search[0]);
          else
            reject("Aadhar Number was not verifiable");
        }
        else(option == 'pan')
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
