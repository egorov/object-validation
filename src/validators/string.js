function string(value) {

  if(typeof value === 'undefined' || value === null)
    return null;

  if(typeof value !== 'string')
    return { 
      type: 'string'
    };
    
  return null;
}

module.exports = string;