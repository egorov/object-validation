/* eslint prefer-reflect: "off" */
const validateConstraints = require('./validateConstraints');
const validateInteger = require('./validateInteger');

function maxLength(value, constraints) {

  validateConstraints(constraints);
  validateInteger(constraints[0], 'length');

  if(typeof value === 'undefined' || value === null)
    return null;

  if(typeof value === 'function')
    return null;

  const result = {
    type: 'maxLength',
    constraints: constraints.slice()
  };
  
  if(!{}.hasOwnProperty.call(value, 'length'))
    return result;

  if(value.length > constraints[0])
    return result;

  return null;
}

module.exports = maxLength;