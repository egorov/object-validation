function integer(value) {

  const result = {
    type: 'integer'
  };
  
  if(typeof value === 'undefined' || value === null)
    return null;

  if(typeof value === 'string') {

    const number = parseFloat(value);
    
    if(isNaN(number))
      return result;

    if(!Number.isInteger(number))
      return result;

    return null;
  }

  if(typeof value !== 'number')
    return result;
  
  if(!Number.isInteger(value))
    return result;
  
  return null;
}

module.exports = integer;