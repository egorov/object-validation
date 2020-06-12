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

    for(const rule in rules) {

      const validate = validators[rule];

      if(!validate)
        continue;
      
      const errors = validate(value, rules[rule]);

      if(!errors)
        continue;

      const result = {};
      result[property] = errors;
      store.dispatch({type: 'validation result', payload: result});
    }
  }
}

module.exports = validate;