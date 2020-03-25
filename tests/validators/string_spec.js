describe('string type', () => {

  const validate = require('../../src/validators/string');

  it('should return null', () => {

    expect(validate('value')).toBeNull();
    expect(validate('')).toBeNull();
    expect(validate(' ')).toBeNull();
    expect(validate(null)).toBeNull();
    expect(validate(void 0)).toBeNull();
  });

  it('should return error', () => {

    const result = { 
      'type': 'string'
    };
    
    expect(validate({})).toEqual(result);
    expect(validate(true)).toEqual(result);
    expect(validate([])).toEqual(result);
    expect(validate(['a'])).toEqual(result);
    expect(validate(() => 1)).toEqual(result);
    expect(validate(1)).toEqual(result);
  });
});