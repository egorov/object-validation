module.exports = function date(value) {

  const error = {
    type: 'date'
  };

  if(value instanceof Date) {

    if(Number.isNaN(value.valueOf()))
      return error;

    return null;    
  }

  if(typeof value !== 'string') 
    return error;
  
  const result = new Date(value);

  if(Number.isNaN(result.valueOf()))
    return error;
 
  return null;
}