const PNF = require('google-libphonenumber').PhoneNumberFormat;
const phoneUtil = 
  require('google-libphonenumber').PhoneNumberUtil.getInstance();

function phone(value) {

  const invalid = {
    type: 'phone'
  };

  if(typeof value === 'undefined' || value === null)
    return null;

  try{
    const number = phoneUtil.parse(value);
    
    if(phoneUtil.isValidNumber(number))
      return null;

    return invalid;
  }
  catch {
    return invalid;
  }
}

module.exports = phone;