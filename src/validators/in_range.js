const validateConstraints = require('./validateConstraints');

function in_range(value, values) {
  
  validateConstraints(values);
  validateLengthOf(values);

  const min = values[0];
  const max = values[1];

  if(value >= min && value <= max)
    return null;
    
  return {
    in_range: values
  };
}

function validateLengthOf(values) {

  if(values.length < 2)
    throw new Error('range should define min and max values');
}

module.exports = in_range;