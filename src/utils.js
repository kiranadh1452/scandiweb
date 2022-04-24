/**
 * Function to check whether the input value is a postive number or not
 * @param {any} data - input value which is to be verified
 * @return {boolean} true if the input value is a positive number (greater than 0), else false
 */
const isValidPosNum = (data) => {

  if(isNaN(data) || data<0) return false;

  return true;
}

/**
 * Function to check whether the input value is empty or not
 * @param {String} data - Input value to be verified
 * @return {boolean} true if input value isn't empty, else false
 */
const isValidText = (data) => {
  
  if(data == '') return false;

  return true;
}

export {isValidPosNum, isValidText};