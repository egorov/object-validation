'use strict';

module.exports = function is_valid_date(state) {

  if(state.error) return;

  if(!state.validation_rules[state.validate_field]) return;

  if(state.validation_rules[state.validate_field].type !== 'date') return;

  if(state.request.body[state.validate_field] === undefined) return;

  if(state.request.body[state.validate_field] === null) return;

  try {

    if(!state.request.body[state.validate_field] instanceof Date) return;

    if(state.request.body[state.validate_field].toString() !== 'Invalid Date')
      return;

    if(!state.validation_results[state.validate_field]) 
      state.validation_results[state.validate_field] = {};
    
    state.validation_results[state.validate_field].type = 'date';
  }
  catch(exception) {
    state.error = exception;
  }
}