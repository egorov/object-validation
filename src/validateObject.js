const validateField = require('./validateField');

function validateObject(context) {

  validateContext(context);

  const value = Object.assign({}, context.value);

  let result = null;

  for(const property in context.rules) {
    if (!{}.hasOwnProperty.call(context.rules, property))
      continue;

    if(!{}.hasOwnProperty.call(value, property))
      value[property] = void 0;

    const ctx = {
      value: value[property],
      rules: context.rules[property],
      validators: context.validators
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

function validateContext(ctx) {

  validateValue(ctx.value, 'value');
  validateValue(ctx.rules, 'rules');
  validateValue(ctx.validators, 'validators');
}

function validateValue(value, name) {

  const msg = `validation context must contain ${name} object`;

  if(typeof value !== 'object')
    throw new Error(msg);

  if(value === null)
    throw new Error(msg);
}

module.exports = validateObject;