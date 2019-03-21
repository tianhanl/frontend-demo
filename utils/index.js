/**
 * Transform a number to string in thousands
 * EX:
 * transformNumber(1500); // '1,500'
 * @param {number} num
 * @returns {string}
 */
export const transformNumber = (num = 0) => {
  const absNum = Math.abs(num);
  const numStrings = num.toString().split('.');
  let integerString = numStrings[0];
  let decimalString = numStrings[1];
  let outputString = '';
  while (integerString.length > 3) {
    outputString = ',' + integerString.slice(-3) + outputString;
    integerString = integerString.slice(0, integerString.length - 3);
  }
  if (integerString) {
    outputString = integerString + outputString;
  }
  if (decimalString) {
    outputString += `.${decimalString}`;
  }
  return (num >= 0 ? '' : '-') + outputString;
};

const DEFAULT_RATIO = 0.427; // 320 / 750
/**
 * conversts length in pt to rem forllowing specification
 * https://www.w3.org/TR/css3-values/#absolute-lengths
 * Formula:
 * result = (ptLength / 72 ) * 96 * deviceToDeisgnRatio / 16
 * @param {number} ptLength
 * @returns {number}
 */
export const convertPtToRem = (
  ptLength,
  deviceToDesignRatio = DEFAULT_RATIO
) => {
  return ptLength * 0.083 * deviceToDesignRatio;
};
