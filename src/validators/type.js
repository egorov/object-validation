const validators = require('./type_validators');

function validateType(value, name) {

  const validate = validators[name];

  if(typeof validate !== 'function')
    return null;

  return validate(value);
}

module.exports = validateType;