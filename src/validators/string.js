function string(value) {

  const result = { 
    type: 'string'
  };

  if(typeof value === 'undefined' || value === null)
    return null;

  if(typeof value !== 'string')
    return result;
    
  return null;
}

module.exports = string;