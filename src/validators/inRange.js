const validateConstraints = require('./validateConstraints');

function inRange(value, range) {
  
  validateConstraints(range);

  if(range.includes(value))
    return null;

  return {
    it: 'must have a value in the range',
    of: range
  };
}
module.exports = inRange;