describe('isString', () => {

  const validate = require('../../src/validators/isString');

  it('should return null', () => {

    expect(validate(null)).toBeNull();
    expect(validate(void 0)).toBeNull();
    expect(validate('value')).toBeNull();
    expect(validate('')).toBeNull();
    expect(validate(' ')).toBeNull();
  });

  it('should return error', () => {

    const result = {
      error: 'isString'
    };
    
    expect(validate({})).toEqual(result);
    expect(validate(true)).toEqual(result);
    expect(validate([])).toEqual(result);
    expect(validate(() => 1)).toEqual(result);
  });
});