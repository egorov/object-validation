module.exports = function date(value) {

  const error = {
    type: 'date'
  };

  if(!(value instanceof Date)) return error;
  
  return null;
}