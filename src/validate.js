function validate(store) {

  const state = store.getState();
  const model = state.model;

  if(model === null)
    return;

  const metadata = state.metadata;

  if(metadata === null)
    return;

  for(const property in metadata) {

    store.dispatch({type: 'field name', payload: property });    

    store.dispatch({type: 'field value', payload: (model[property] || null) });

    validateField(store);
  }
}

function validateField(store) {

  const state = store.getState();
  const property = state.fieldName;
  const rules = state.metadata[property];

  if(!rules)
    return;
  
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
    store.dispatch({type: 'validation result', payload: {[property]: errors}});  
}

module.exports = validate;