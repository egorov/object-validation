'use strict';

module.exports = function is_boolean(state) {

  if(state.error) return;

  if(!state.validation_rules[state.validate_field]) return;

  if(state.validation_rules[state.validate_field].type !== 'boolean') return;

  if(state.request.body[state.validate_field] === undefined) return;

  if(state.request.body[state.validate_field] === null) return;

  try {

    if(state.request.body[state.validate_field] instanceof Boolean) return;

    if(state.request.body[state.validate_field] === true) return;

    if(state.request.body[state.validate_field] === false) return;

    if(!state.validation_results[state.validate_field]) 
      state.validation_results[state.validate_field] = {};
    
    state.validation_results[state.validate_field].type = 'boolean';
  }
  catch(exception) {
    state.error = exception;
  }
}