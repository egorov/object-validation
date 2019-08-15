function validateConstraints(values) {

  if(!Array.isArray(values))
    throw new TypeError('constraints value should be an array');
  
  if(values.length === 0)
    throw new Error('constraints should contain values');
}

module.exports = validateConstraints;