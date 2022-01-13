export const normalLength = 22;

const regExp = new RegExp(`.{${normalLength}}`);


const isNormalLength = string => {
  const separateString = string.split(' ');

  for (let index = 0; index < separateString.length; index++) {
    if (regExp.test(separateString[index])) {
      return false;
    }
  }

  return true;
};


export default isNormalLength;
