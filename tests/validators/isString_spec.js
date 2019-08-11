describe('isString', () => {

  const validate = require('../../src/validators/isString');

  it('should return null', () => {

    expect(validate(null)).toBeNull();
    expect(validate(void 0)).toBeNull();
    expect(validate('value')).toBeNull();
    expect(validate('')).toBeNull();
    expect(validate(' ')).toBeNull();
  });

  it('should return error name', () => {

    const message = 'string is required';
    
    expect(validate({})).toEqual(message);
    expect(validate(true)).toEqual(message);
    expect(validate([])).toEqual(message);
    expect(validate(() => 1)).toEqual(message);
  });
});