const validateInteger = require('./validateInteger');

function min_length(value, length) {

  validateInteger(length, 'length');

  if(typeof value === 'undefined' || value === null)
    return null;

  if(!Array.isArray(value) && typeof value !== 'string')
    return null;

  if(value.length < length)
    return {
      min_length: length
    };

  return null;
}

module.exports = min_length;