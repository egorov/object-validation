/* eslint prefer-reflect: "off" */
const validators = require('./validators');
const validateField = require('./validateField');

function validateObject(context) {

  let result = null;

  for(const property in context.rules) {
    if (!{}.hasOwnProperty.call(context.rules, property))
      continue;

    if(!{}.hasOwnProperty.call(context.value, property))
      continue;

    const ctx = {
      value: context.value[property],
      rules: context.rules[property],
      validators
    };
    const vr = validateField(ctx);

    if(vr === null)
      continue;
    
    if(result === null)
      result = {};
    
    result[property] = vr;
  }

  return result;
}

module.exports = validateObject;