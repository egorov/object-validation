function isInteger(value) {

  const result = {
    it: 'must be an integer'
  };
  
  if(typeof value === 'undefined' || value === null)
    return null;

  if(typeof value !== 'number')
    return result;
  
  if(!Number.isInteger(value))
    return result;
  
  return null;
}

module.exports = isInteger;