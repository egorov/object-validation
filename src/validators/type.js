const validators = require('./type_validators');

function validateType(name, value) {

  const validate = validators[name];

  if(typeof validate !== 'function')
    return null;

  return validate(value);
}

module.exports = validateType;