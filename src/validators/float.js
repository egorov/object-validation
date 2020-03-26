function float(value) {

  const result = {
    type: 'float'
  };

  if(typeof value === 'undefined' || value === null)
    return null;

  if(typeof value !== 'number')
    return result;

  if(value === 0)
    return null;

  if(Number.isInteger(value))
    return result;
  
  return null;
}

module.exports = float;