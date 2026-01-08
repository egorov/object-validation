'use strict';

module.exports = function in_range(state) {

  if(state.error) return;

  if(!state.validation_rules[state.validate_field]) return;

  if(typeof state.validation_rules[state.validate_field].in_range !== 'object') return;

  if(state.request.body[state.validate_field] === undefined) return;

  if(state.request.body[state.validate_field] === null) return;  

  try {

    const value = state.request.body[state.validate_field];
    const range = state.validation_rules[state.validate_field].in_range;

    if(Array.isArray(range)) {

      if(range.length === 0) return;

      if(range.length === 1) 
        if(value === range[0]) return;

      if(typeof value === 'number') {
        
        if(value >= range[0] && value <= range[range.length - 1]) return;

        if(value >= range[range.length - 1] && value <= range[0]) return;
      }

      if(range.indexOf(value) !== -1) return;
    }
    else {
      if(typeof range.max !== 'number' && typeof range.min !== 'number') return;

      if(value >= range.min && value <= range.max) return;
    }

    if(!state.validation_results[state.validate_field]) 
      state.validation_results[state.validate_field] = {};
    
    state.validation_results[state.validate_field].in_range = 
      state.validation_rules[state.validate_field].in_range;
  }
  catch(exception) {
    state.error = exception;
  }
}