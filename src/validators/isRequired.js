function isRequired(value) {

  const result = {
    it: 'value is required'
  };

  if(typeof value === 'undefined')
    return result;
  
  if(value === null)
    return result;
  
  return null;
}

module.exports = isRequired;