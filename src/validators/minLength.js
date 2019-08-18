/* eslint prefer-reflect: "off" */
const validateConstraints = require('./validateConstraints');
const validateInteger = require('./validateInteger');

function minLength(value, constraints) {

  validateConstraints(constraints);
  validateInteger(constraints[0], 'length');

  const result = {
    type: 'minLength',
    constraints: constraints.slice()
  };

  if(typeof value === 'undefined' || typeof value === 'function')
    return result;

  if(value === null)
    return result;

  if(!{}.hasOwnProperty.call(value, 'length'))
    return result;
  
  if(value.length < constraints[0])
    return result;

  return null;
}

module.exports = minLength;