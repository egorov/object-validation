const validateConstraints = require('./validateConstraints');

function from_set(value, values) {
  
  validateConstraints(values);

  if(values.includes(value))
    return null;

  return {
    from_set: values
  };
}
module.exports = from_set;