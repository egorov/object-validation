function validateField(context) {
  
  const errors = [];

  for(let index = 0; index < context.rules.length; index += 1) {
    
    const rule = context.rules[index];
    const validate = context.validators[rule.type];
    const result = validate(context.value, rule.constraints);
    
    if(result !== null)
      errors.push(result);
  }

  if(errors.length === 0)
    return null;

  return errors;
}

module.exports = validateField;