function is_required(value) {

  const result = {
    is_required: true
  };

  if(typeof value === 'undefined')
    return result;
  
  if(value === null)
    return result;
  
  return null;
}

module.exports = is_required;