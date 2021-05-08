function number(value) {

  const result = {
    type: 'number'
  };

  if(typeof value === 'undefined' || value === null)
    return null;

  if(typeof value === 'string') {

    const number = Number.parseFloat(value);
    
    if(Number.isNaN(number))
      return result;

    return null;
  }    

  if(typeof value !== 'number')
    return result;

  if(value === 0)
    return null;
    
  return null;
}

module.exports = number;