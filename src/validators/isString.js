function isString(value) {

  const result = {
    type: 'isString'
  };

  if(typeof value === 'undefined' || value === null)
    return null;

  if(typeof value !== 'string')
    return result;
    
  return null;
}

module.exports = isString;