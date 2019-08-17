const validateConstraints = require('./validateConstraints');

function inRange(value, constraints) {
  
  validateConstraints(constraints);

  if(constraints.includes(value))
    return null;

  return {
    type: 'inRange',
    constraints
  };
}
module.exports = inRange;