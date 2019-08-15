/* eslint prefer-reflect: "off" */
const validateConstraints = require('./validateConstraints');
const validateInteger = require('./validateInteger');

function minLength(value, constraints) {

  validateConstraints(constraints);
  validateInteger(constraints[0], 'length');

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

module.exports = minLength;