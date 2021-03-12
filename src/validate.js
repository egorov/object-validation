module.exports = function validate(state) {

  if(!state.model) return;

  if(!state.metadata) return;

  state.result = null;

  for(const property in state.metadata) {

    state.fieldName = property;

    state.fieldValue = state.model[property] || null;

    validateField(state);
  }
}

function validateField(state) {

  const property = state.fieldName;
  const rules = state.metadata[property];

  if(!rules) return;
  
  const validators = state.validators;
  const errors = [];

  for(const rule in rules) {

    const validate = (rule === 'type') ? validators.type : validators[rule];

    if(!validate)
      continue;
    
    const error = validate(state.fieldValue, rules[rule]);

    if(error)
      errors.push(error);
  }

  if(errors.length > 0) 
    state.result = Object.assign({}, state.result, { [property]: errors });
}