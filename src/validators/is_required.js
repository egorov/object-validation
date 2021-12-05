'use strict';

module.exports = function is_required(value, enabled) {

  if(enabled !== true)
    return null;
    
  const result = {
    is_required: true
  };

  if(typeof value === 'undefined')
    return result;
  
  if(value === null)
    return result;
  
  return null;
}