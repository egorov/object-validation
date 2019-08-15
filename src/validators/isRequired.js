function isRequired(value) {

  const result = {
    type: 'isRequired'
  };

  if(typeof value === 'undefined')
    return result;
  
  if(value === null)
    return result;
  
  return null;
}

module.exports = isRequired;