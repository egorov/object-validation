'use strict';

module.exports = function is_string_date(state) {

  if(state.error) return;

  if(!state.validation_rules[state.validate_field]) return;

  if(state.validation_rules[state.validate_field].type !== 'date') return;

  if(!state.request.body[state.validate_field]) return;

  try {

    if(typeof state.request.body[state.validate_field] !== 'string') return;

    if(!Number.isNaN(Date.parse(state.request.body[state.validate_field]))) return;

    if(!state.validation_results[state.validate_field]) state.validation_results[state.validate_field] = {};
    
    state.validation_results[state.validate_field].type = 'date';
  }
  catch(exception) {
    state.error = exception;
  }
}