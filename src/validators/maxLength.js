const validateInteger = require('./validateInteger');

function maxLength(value, length) {

  validateInteger(length, 'length');

  if(typeof value === 'undefined' || value === null)
    return null;

  if(typeof value === 'function')
    return null;

  const result = {
    it: 'maximum length',
    is: length
  };
  
  if(!{}.hasOwnProperty.call(value, 'length'))
    return result;

  if(value.length > length)
    return result;

  return null;
}

module.exports = maxLength;