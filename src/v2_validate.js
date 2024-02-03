'use strict';

const validators = require('./v2_validators/methods');

module.exports = function v2_validate(state) {

  if(state.error) return;
   
  try {
    
    state.validation_results = {};

    for(const key of Object.keys(state.validation_rules)) {
      
      state.validate_field = key;

      for(const validate of validators) {
        validate(state);
      }
    }

    delete state.validate_field;

    if(Object.keys(state.validation_results).length > 0) return;
    
    delete state.validation_results;
  }
  catch(exception) {
    state.error = exception;
  }
}