function isInteger(value) {

  const result = {
    type: 'isInteger'
  };

  if(typeof value !== 'number')
    return result;
  
  if(!Number.isInteger(value))
    return result;
  
  return null;
}

module.exports = isInteger;