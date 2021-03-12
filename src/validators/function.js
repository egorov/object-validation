module.exports = function functionValidator(value) {

  const error = {
    type: 'function'
  };

  if(typeof value !== 'function') return error;
  
  return null;
}