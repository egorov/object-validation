function isFloat(value) {

  const result = {
    type: 'isFloat'
  };

  if(typeof value !== 'number')
    return result;

  if(Number.isInteger(value))
    return result;
  
  return null;
}

module.exports = isFloat;