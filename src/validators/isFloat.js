function isFloat(value) {

  const result = {
    it: 'must be a floating point number'
  };

  if(typeof value === 'undefined' || value === null)
    return null;

  if(typeof value !== 'number')
    return result;

  if(Number.isInteger(value))
    return result;
  
  return null;
}

module.exports = isFloat;