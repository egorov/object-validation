/* eslint prefer-reflect: "off" */
const validateInteger = require('./validateInteger');

function minLength(value, length) {

  validateInteger(length, 'length');

  if(typeof value === 'undefined' || value === null)
    return null;

  if(typeof value === 'function')
    return null;

  const result = {
    it: 'minimum length',
    is: length
  };
  
  if(!{}.hasOwnProperty.call(value, 'length'))
    return result;
  
  if(value.length < length)
    return result;

  return null;
}

module.exports = minLength;