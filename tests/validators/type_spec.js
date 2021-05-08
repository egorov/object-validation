describe('type ', () => {

  const validate = require('../../src/validators/type');

  it('float validation should return null', () => {

    expect(validate(1.23, 'float')).toBeNull();
    expect(validate(-1.23, 'float')).toBeNull();
    expect(validate(0, 'float')).toBeNull();
    expect(validate(0.43, 'float')).toBeNull();
    expect(validate(void 0, 'float')).toBeNull();
    expect(validate(null, 'float')).toBeNull();
  });

  it('float validation should return error', () => {

    const error = {
      type: 'float'
    };

    expect(validate(45, 'float')).toEqual(error);
    expect(validate({}, 'float')).toEqual(error);
    expect(validate([], 'float')).toEqual(error);
    expect(validate('text', 'float')).toEqual(error);
    expect(validate(true, 'float')).toEqual(error);
  });

  it('integer validation should return null', () => {

    expect(validate(1, 'integer')).toBeNull();
    expect(validate(-1, 'integer')).toBeNull();
    expect(validate(0, 'integer')).toBeNull();
    expect(validate(void 0, 'integer')).toBeNull();
    expect(validate(null, 'integer')).toBeNull();
  });

  it('integer validation should return error', () => {

    const error = { 
      type: 'integer' 
    };

    expect(validate(1.44, 'integer')).toEqual(error);
    expect(validate({}, 'integer')).toEqual(error);
    expect(validate([], 'integer')).toEqual(error);
    expect(validate('text', 'integer')).toEqual(error);
    expect(validate(true, 'integer')).toEqual(error);
    expect(validate(() => 1, 'integer')).toEqual(error);
  });

  it('string validation should return null', () => {

    expect(validate('value', 'string')).toBeNull();
    expect(validate('', 'string')).toBeNull();
    expect(validate(' ', 'string')).toBeNull();
    expect(validate(null, 'string')).toBeNull();
    expect(validate(void 0, 'string')).toBeNull();
  });

  it('string validation should return error', () => {

    const result = { 
      type: 'string'
    };
    
    expect(validate({}, 'string')).toEqual(result);
    expect(validate(true, 'string')).toEqual(result);
    expect(validate([], 'string')).toEqual(result);
    expect(validate(['a'], 'string')).toEqual(result);
    expect(validate(() => 1, 'string')).toEqual(result);
    expect(validate(1, 'string')).toEqual(result);
  });  

  it('url validation should return null', () => {

    expect(validate('http://localhost', 'url')).toBeNull();
    expect(validate('https://domain.local:8888/app', 'url')).toBeNull();
    expect(validate('file://empty.txt', 'url')).toBeNull();
    expect(validate(void 0, 'url')).toBeNull();
    expect(validate(null, 'url')).toBeNull();
  });

  it('url validation should return error', () => {

    const error = {
      type: 'url'
    };

    expect(validate(1, 'url')).toEqual(error);
    expect(validate('not url', 'url')).toEqual(error);
    expect(validate(true, 'url')).toEqual(error);
    expect(validate({}, 'url')).toEqual(error);
    expect(validate([], 'url')).toEqual(error);
    expect(validate(1.55, 'url')).toEqual(error);
    expect(validate(() => 1, 'url')).toEqual(error);
  });

  it('phone should return null', () => {

    expect(validate('+7 912 922 81 57', 'phone')).toBeNull();
    expect(validate('+1 202-456-1414', 'phone')).toBeNull();
    expect(validate('+33 528.82.93.92', 'phone')).toBeNull();
    expect(validate('+39 069 763-5756', 'phone')).toBeNull();
    expect(validate('+86 10 6552 9988', 'phone')).toBeNull();
    expect(validate('+386 1 655 9988', 'phone')).toBeNull();
    expect(validate(void 0)).toBeNull();
    expect(validate(null)).toBeNull();
  });

  it('phone should return error', () => {
    
    const error = {
      type: 'phone'
    };

    expect(validate('joe@doe.local', 'phone')).toEqual(error);
    expect(validate(1, 'phone')).toEqual(error);
    expect(validate(true, 'phone')).toEqual(error);
    expect(validate({}, 'phone')).toEqual(error);
    expect(validate([], 'phone')).toEqual(error);
    expect(validate('1 800 WRONG NUMBER', 'phone')).toEqual(error);
    expect(validate('8 3452 220346', 'phone')).toEqual(error);
  });

  it('email should return null', () => {

    expect(validate('joe@doe.local', 'email')).toBeNull();
    expect(validate("&'*+-./=?^_{}~@mail.local", 'email')).toBeNull();
    expect(validate('j`o`e@doe.local', 'email')).toBeNull();
    expect(validate('joe`@doe.local', 'email')).toBeNull();
    expect(validate('joe@doe.local', 'email')).toBeNull();
  });

  it('email should return error', () => {

    const error = {
      type: 'email'
    };

    expect(validate(null, 'email')).toEqual(error);
    expect(validate(void 0, 'email')).toEqual(error);
    expect(validate(1, 'email')).toEqual(error);
    expect(validate(true, 'email')).toEqual(error);
    expect(validate({}, 'email')).toEqual(error);
    expect(validate([], 'email')).toEqual(error);
    expect(validate('not email', 'email')).toEqual(error);
  });

  it('boolean should return null', () => {

    expect(validate(true, 'boolean')).toBeNull();
    expect(validate(false, 'boolean')).toBeNull();
    expect(validate(new Boolean(), 'boolean')).toBeNull();
    expect(validate(new Boolean(1), 'boolean')).toBeNull();
  });

  it('boolean should return error', () => {

    const error = {
      type: 'boolean'
    };

    expect(validate(null, 'boolean')).toEqual(error);
    expect(validate(void 0, 'boolean')).toEqual(error);
    expect(validate(1, 'boolean')).toEqual(error);
    expect(validate('true', 'boolean')).toEqual(error);
    expect(validate({}, 'boolean')).toEqual(error);
    expect(validate([], 'boolean')).toEqual(error);
    expect(validate(new Date(), 'boolean')).toEqual(error);
    expect(validate(NaN, 'boolean')).toEqual(error);
  });  

  it('number should return null', () => {

    expect(validate(1, 'number')).toBeNull();
    expect(validate(-1, 'number')).toBeNull();
    expect(validate(0, 'number')).toBeNull();
    expect(validate(-0, 'number')).toBeNull();
    expect(validate(void 0, 'number')).toBeNull();
    expect(validate(null, 'number')).toBeNull();
    expect(validate('1', 'number')).toBeNull();
    expect(validate('1.01', 'number')).toBeNull();
    expect(validate('-0', 'number')).toBeNull();
  });

  it('number should return error', () => {

    const error = { 
      type: 'number' 
    };

    expect(validate({}, 'number')).toEqual(error);
    expect(validate([], 'number')).toEqual(error);
    expect(validate('text', 'number')).toEqual(error);
    expect(validate(true, 'number')).toEqual(error);
    expect(validate(() => 1, 'number')).toEqual(error);
  });  
});