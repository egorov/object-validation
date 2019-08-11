describe('isString', () => {

  const validate = require('../../src/validators/isString');

  it('should return null', () => {

    expect(validate(null)).toEqual(null);
    expect(validate(void 0)).toEqual(null);
    expect(validate('value')).toEqual(null);
    expect(validate('')).toEqual(null);
    expect(validate(' ')).toEqual(null);
  });

  it('should return error name', () => {

    const message = 'string is required';
    
    expect(validate({})).toEqual(message);
    expect(validate(true)).toEqual(message);
    expect(validate([])).toEqual(message);
    expect(validate(() => 1)).toEqual(message);
  });
});