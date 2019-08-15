/* eslint prefer-reflect: "off" */

function minLength(value, constraints) {

  validateConstraints(constraints);

  if(!{}.hasOwnProperty.call(value, 'length'))
    return null;

  if(typeof value === 'function')
    return null;
  
  if(value.length < constraints[0])
    return {
      error: 'minLength',
      constraints
    };

  return null;
}

function validateConstraints(values) {

  if(!Array.isArray(values))
    throw new TypeError('constraints value should be an array');
  
  if(values.length === 0)
    throw new Error('constraints should contain length value');

  validateInteger(values[0]);
}

function validateInteger(value) {

  const msg = 'length argument must be positive integer';

  if(!Number.isInteger(value))
    throw new TypeError(msg);
  
  if(value <= 0)
    throw new TypeError(msg);
}

module.exports = minLength;