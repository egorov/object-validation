function validateInteger(value, name) {

  const nameError = 
    new TypeError('name value should be not empty string');
  
  if(typeof name !== 'string')
    throw nameError;

  if(!(/\S/).test(name))
    throw nameError;

  const msg = `${name} argument must be positive integer`;

  if(!Number.isInteger(value))
    throw new TypeError(msg);
  
  if(value <= 0)
    throw new TypeError(msg);
}

module.exports = validateInteger;