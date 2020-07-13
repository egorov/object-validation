function email(value) {

  const error = {
    type: 'email'
  };

  if(value === null || typeof value === 'undefined')
    return error;
  
  const expression = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

  if (value.length > 256)
    return error;

  if (!expression.test(value))
    return error;

  const [name, domain] = value.split('@');
  
  if (name.length > 64)
    return error;

  var domainParts = domain.split('.');
  
  if (domainParts.some(function (part) {
    return part.length > 63;
  })) return error;

  return null;
}

module.exports = email;