'use strict';

module.exports = function min_length(state) {

  if(state.error) return;

  if(!state.validation_rules[state.validate_field]) return;

  if(typeof state.validation_rules[state.validate_field].min_length !== 'number') return;

  if(!Array.isArray(state.request.body[state.validate_field]) 
    && typeof state.request.body[state.validate_field] !== 'string') return;

  if(state.request.body[state.validate_field].length >= 
    state.validation_rules[state.validate_field].min_length) return;

  try {

    if(!state.validation_results[state.validate_field]) 
      state.validation_results[state.validate_field] = {};
    
    state.validation_results[state.validate_field].min_length = 
      state.validation_rules[state.validate_field].min_length;
  }
  catch(exception) {
    state.error = exception;
  }
}