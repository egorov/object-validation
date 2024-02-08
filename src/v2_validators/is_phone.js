'use strict';

const phone_util = 
  require('google-libphonenumber').PhoneNumberUtil.getInstance();

module.exports = function is_phone(state) {

  if(state.error) return;

  if(!state.validation_rules[state.validate_field]) return;

  if(state.validation_rules[state.validate_field].type !== 'phone') return;

  if(!state.request.body[state.validate_field]) return;

  try {


    if(typeof state.request.body[state.validate_field] === 'string') {

      const phone_number = phone_util.parse(state.request.body[state.validate_field]);
    
      if(phone_util.isValidNumber(phone_number)) return;  
    }

    if(!state.validation_results[state.validate_field]) 
      state.validation_results[state.validate_field] = {};
  
    state.validation_results[state.validate_field].type = 'phone';
  }
  catch(exception) {
    state.error = exception;
  }
}