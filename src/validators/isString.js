function isString(value) {

  if(typeof value === 'undefined')
    return null;

  if(value === null)
    return null;

  if(typeof value !== 'string')
    return 'string is required';
    
  return null;
}

module.exports = isString;