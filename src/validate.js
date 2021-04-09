const validators = require('./validators');

module.exports = function validate(data, validationRules) {

  if(typeof data !== 'object' || data === null)
    throw new TypeError('data must be object');

  if(typeof validationRules !== 'object' || validationRules === null)
    throw new TypeError('validationRules must be object');

  const state = {
    metadata: validationRules,
    model: data,
    result: null,
    validators,
  };

  for(const property in state.metadata) {

    state.fieldName = property;

    state.fieldValue = state.model[property] || null;

    validateField(state);
  }

  return state.result;
}

function validateField(state) {

  const property = state.fieldName;
  const rules = state.metadata[property];

  if(!rules) return;
  
  const validators = state.validators;
  const errors = [];

  for(const rule in rules) {

    const check = (rule === 'type') ? validators.type : validators[rule];

    if(!check)
      continue;
    
    const error = check(state.fieldValue, rules[rule]);

    if(error)
      errors.push(error);
  }

  if(errors.length > 0) 
    state.result = Object.assign({}, state.result, { [property]: errors });
}