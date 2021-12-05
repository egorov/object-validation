'use strict';

module.exports = function validate(value, __constructor) {

  if(typeof __constructor !== 'function')
    throw new Error('Second argument must be reference to constructor function!');

  if(value instanceof __constructor)
    return null;

  return {
    instance_of: __constructor.name
  };  
}