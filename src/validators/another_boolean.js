'use strict';

module.exports = function validate_boolean(state) {

  if(state.error) return;

  try {
    if(!state.field_validation_rule) return;

    if(state.field_validation_rule.type !== 'boolean') return;
  
    const error = {
      type: 'boolean'
    };
  
    if(typeof state.field_value === 'boolean') return;

    if(typeof state.field_validation_rule.is_required !== true 
        && typeof state.field_value === 'undefined') return; 
      
    const key = state.field_name;
  
    if(!Array.isArray(state.validation_results[key]))
      state.validation_results[key] = [];
  
    state.validation_results[key].push(error);
  }
  catch(exception) {
    state.error = exception;
  }
}