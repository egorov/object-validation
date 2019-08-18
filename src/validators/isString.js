function isString(value) {

  const result = {
    type: 'isString'
  };

  if(typeof value === 'undefined')
    return result;

  if(value === null)
    return result;

  if(typeof value !== 'string')
    return result;
    
  return null;
}

module.exports = isString;