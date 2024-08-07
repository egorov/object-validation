'use strict';

module.exports = function is_email(state) {

  if(state.error) return;

  if(!state.validation_rules[state.validate_field]) return;

  if(state.validation_rules[state.validate_field].type !== 'email') return;

  if(state.request.body[state.validate_field] === undefined) return;

  if(state.request.body[state.validate_field] === null) return;

  try {

    if(typeof state.request.body[state.validate_field] === 'string') {

      if(state.request.body[state.validate_field].length <= 253) {
        
        const expression = 
          /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

        if(expression.test(state.request.body[state.validate_field]) === true) return;
      }
    }

    if(!state.validation_results[state.validate_field]) 
      state.validation_results[state.validate_field] = {};
  
    state.validation_results[state.validate_field].type = 'email';
  }
  catch(exception) {
    state.error = exception;
  }
}