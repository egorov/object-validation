function isRequired(value) {

  const error = 'value is required';

  if(typeof value === 'undefined')
    return error;
  
  if(value === null)
    return error;
  
  return null;
}

module.exports = isRequired;