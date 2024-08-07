'use strict';

module.exports = function is_float(state) {

  if(state.error) return;

  if(!state.validation_rules[state.validate_field]) return;

  if(state.validation_rules[state.validate_field].type !== 'float') return;

  if(state.request.body[state.validate_field] === undefined) return;

  if(state.request.body[state.validate_field] === null) return;

  try {

    if(typeof state.request.body[state.validate_field] === 'number') {
      if(!Number.isInteger(state.request.body[state.validate_field])) return;
    }
    else {
      const value = Number.parseFloat(state.request.body[state.validate_field]);

      if(!Number.isNaN(value)) return;
    }

    if(!state.validation_results[state.validate_field]) 
      state.validation_results[state.validate_field] = {};
    
    state.validation_results[state.validate_field].type = 'float';
  }
  catch(exception) {
    state.error = exception;
  }
}