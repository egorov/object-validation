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
});