function validateField(context) {
  
  let errors = null;

  for(let idx = 0; idx < context.rules.length; idx += 1) {
    
    const rule = context.rules[idx];
    const validate = context.validators[rule.type];
    const result = validate(context.value, rule.constraints);
    
    if(result === null)
      continue;

    if(errors === null)
      errors = [];
      
    errors.push(result);
  }

  return errors;
}

module.exports = validateField;