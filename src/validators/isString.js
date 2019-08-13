function isString(value) {

  if(typeof value === 'undefined')
    return null;

  if(value === null)
    return null;

  if(typeof value !== 'string')
    return {
      error: 'isString'
    };
    
  return null;
}

module.exports = isString;