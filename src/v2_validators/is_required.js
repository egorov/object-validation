'use strict';

module.exports = function is_required(state) {

  if(state.error) return;

  if(!state.validation_rules[state.validate_field]) return;

  if(state.validation_rules[state.validate_field].is_required !== true) return;

  try {

    if(typeof state.request.body[state.validate_field] !== 'undefined'
      && state.request.body[state.validate_field] !== null) return;
 
    if(!state.validation_results[state.validate_field]) state.validation_results[state.validate_field] = {};
    
    state.validation_results[state.validate_field].is_required = true;
  }
  catch(exception) {
    state.error = exception;
  }
}