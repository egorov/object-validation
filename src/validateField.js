/* eslint prefer-reflect: "off" */
function validateField(context) {
  
  let errors = null;

  for(let idx = 0; idx < context.rules.length; idx += 1) {
    
    const rule = context.rules[idx];    
    const validate = context.validators[rule.it];
    let result = null;

    if ({}.hasOwnProperty.call(rule, 'is'))
      result = validate(context.value, rule.is);
    else if ({}.hasOwnProperty.call(rule, 'of'))
      result = validate(context.value, rule.of);
    else
      result = validate(context.value);

    if(result === null)
      continue;

    if(errors === null)
      errors = [];
      
    errors.push(result);
  }

  return errors;
}

module.exports = validateField;