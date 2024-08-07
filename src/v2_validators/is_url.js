'use strict';

module.exports = function is_url(state) {

  if(state.error) return;

  if(!state.validation_rules[state.validate_field]) return;

  if(state.validation_rules[state.validate_field].type !== 'url') return;

  if(state.request.body[state.validate_field] === undefined) return;

  if(state.request.body[state.validate_field] === null) return;

  try {
    new URL(state.request.body[state.validate_field]);
  }
  catch(exception) {

    if(exception.message.indexOf('Invalid URL') !== -1) {

      if(!state.validation_results[state.validate_field]) 
        state.validation_results[state.validate_field] = {};

      state.validation_results[state.validate_field].type = 'url';

      return;
    }

    state.error = exception;
  }
}