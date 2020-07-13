const validateInteger = require('./validateInteger');

function min_length(value, length) {

  validateInteger(length, 'length');

  if(typeof value === 'undefined' || value === null)
    return null;

  if(Array.isArray(value))
    if(value.length < length)
      return { min_length: length };

  if(typeof value === 'string')
    if(value.trim().length < length) 
      return { min_length: length};

  return null;
}

module.exports = min_length;