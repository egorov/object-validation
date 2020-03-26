const validateInteger = require('./validateInteger');

function max_length(value, length) {

  validateInteger(length, 'length');

  if(typeof value === 'undefined' || value === null)
    return null;

  if(!Array.isArray(value) && typeof value !== 'string')
    return null;

  if(value.length > length)
    return {
      max_length: length
    };

  return null;
}

module.exports = max_length;