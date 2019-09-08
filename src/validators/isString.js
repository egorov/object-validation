function isString(value) {

  const result = {
    it: 'should be a string'
  };

  if(typeof value === 'undefined' || value === null)
    return null;

  if(typeof value !== 'string')
    return result;
    
  return null;
}

module.exports = isString;