module.exports = function boolean(value) {

  const error = {
    type: 'boolean'
  };

  if(value instanceof Boolean) return null;

  if(value === true) return null;

  if(value === false) return null;
  
  return error;
}