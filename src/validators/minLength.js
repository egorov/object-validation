/* eslint prefer-reflect: "off" */

function minLength(value, length) {

  validateInteger(length);

  if(!{}.hasOwnProperty.call(value, 'length'))
    return null;

  if(typeof value === 'function')
    return null;
  
  if(value.length < length)
    return {
      error: 'minLength',
      constraints: [length]
    };

  return null;
}

function validateInteger(value) {

  const msg = 'length argument must be positive integer';

  if(!Number.isInteger(value))
    throw new TypeError(msg);
  
  if(value <= 0)
    throw new TypeError(msg);
}
module.exports = minLength;