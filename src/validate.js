function validate(store) {

  const state = store.getState();
  const model = state.model;
  const validators = state.validators;

  if(model === null)
    return;

  const metadata = state.metadata;

  if(metadata === null)
    return;

  for(const property in metadata) {

    const rules = metadata[property];

    if(!rules)
      continue;

    const value = model[property];

    const errors = [];

    for(const rule in rules) {

      let validate = null;

      if(rule === 'type')
        validate = validators.type;
      else
        validate = validators[rule];

      if(!validate)
        continue;
      
      const error = validate(value, rules[rule]);

      if(!error)
        continue;

      errors.push(error);
    }

    if(errors.length > 0) {
      const result = {};
      result[property] = errors;
      store.dispatch({type: 'validation result', payload: result});  
    }
  }
}

module.exports = validate;