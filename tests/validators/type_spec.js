describe('type ', () => {

  const validate = require('../../src/validators/type');

  it('float validation should return null', () => {

    expect(validate('float', 1.23)).toBeNull();
    expect(validate('float', -1.23)).toBeNull();
    expect(validate('float', 0)).toBeNull();
    expect(validate('float', 0.43)).toBeNull();
    expect(validate('float', void 0)).toBeNull();
    expect(validate('float', null)).toBeNull();
  });

  it('float validation should return error', () => {

    const error = {
      type: 'float'
    };

    expect(validate('float', 45)).toEqual(error);
    expect(validate('float', {})).toEqual(error);
    expect(validate('float', [])).toEqual(error);
    expect(validate('float', 'text')).toEqual(error);
    expect(validate('float', true)).toEqual(error);
  });

  it('integer validation should return null', () => {

    expect(validate('integer', 1)).toBeNull();
    expect(validate('integer', -1)).toBeNull();
    expect(validate('integer', 0)).toBeNull();
    expect(validate('integer', void 0)).toBeNull();
    expect(validate('integer', null)).toBeNull();
  });

  it('integer validation should return error', () => {

    const error = { 
      type: 'integer' 
    };

    expect(validate('integer', 1.44)).toEqual(error);
    expect(validate('integer', {})).toEqual(error);
    expect(validate('integer', [])).toEqual(error);
    expect(validate('integer', 'text')).toEqual(error);
    expect(validate('integer', true)).toEqual(error);
    expect(validate('integer', () => 1)).toEqual(error);
  });

  it('string validation should return null', () => {

    expect(validate('string', 'value')).toBeNull();
    expect(validate('string', '')).toBeNull();
    expect(validate('string', ' ')).toBeNull();
    expect(validate('string', null)).toBeNull();
    expect(validate('string', void 0)).toBeNull();
  });

  it('string validation should return error', () => {

    const result = { 
      type: 'string'
    };
    
    expect(validate('string', {})).toEqual(result);
    expect(validate('string', true)).toEqual(result);
    expect(validate('string', [])).toEqual(result);
    expect(validate('string', ['a'])).toEqual(result);
    expect(validate('string', () => 1)).toEqual(result);
    expect(validate('string', 1)).toEqual(result);
  });  

  it('url validation should return null', () => {

    expect(validate('url', 'http://localhost')).toBeNull();
    expect(validate('url', 'https://domain.local:8888/app')).toBeNull();
    expect(validate('url', 'file://empty.txt')).toBeNull();
    expect(validate('url', void 0)).toBeNull();
    expect(validate('url', null)).toBeNull();
  });

  it('url validation should return error', () => {

    const error = {
      type: 'url'
    };

    expect(validate('url', 1)).toEqual(error);
    expect(validate('url', 'not url')).toEqual(error);
    expect(validate('url', true)).toEqual(error);
    expect(validate('url', {})).toEqual(error);
    expect(validate('url', [])).toEqual(error);
    expect(validate('url', 1.55)).toEqual(error);
    expect(validate('url', () => 1)).toEqual(error);
  });  
});