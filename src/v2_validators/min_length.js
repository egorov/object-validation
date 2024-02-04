'use strict';

module.exports = function min_length(state) {

  if(state.error) return;

  if(!state.validation_rules[state.validate_field]) return;

  if(typeof state.validation_rules[state.validate_field].min_length !== 'number') return;

  if(!state.request.body[state.validate_field]) return;

  try {

    if(Array.isArray(state.request.body[state.validate_field])) {
      if(state.request.body[state.validate_field].length >= 
        state.validation_rules[state.validate_field].min_length) return;
    }

    if(typeof state.request.body[state.validate_field] === 'string') {
      if(state.request.body[state.validate_field].length >= 
        state.validation_rules[state.validate_field].min_length) return;
    }

    if(!state.validation_results[state.validate_field]) 
      state.validation_results[state.validate_field] = {};
    
    state.validation_results[state.validate_field].min_length = 
      state.validation_rules[state.validate_field].min_length;
  }
  catch(exception) {
    state.error = exception;
  }
}