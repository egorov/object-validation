describe('isRequired', () => {

  const validate = require('../../src/validators/isRequired');

  it('should return null', () => {

    expect(validate('value')).toEqual(null);
    expect(validate('')).toEqual(null);
    expect(validate(' ')).toEqual(null);
    expect(validate(true)).toEqual(null);
    expect(validate(1)).toEqual(null);
    expect(validate(() => 1)).toEqual(null);
    expect(validate({})).toEqual(null);
    expect(validate([])).toEqual(null);
  });

  it('should return error', () => {

    const error = 'value is required';

    expect(validate(null)).toEqual(error);
    expect(validate(void 0)).toEqual(error);
  });
});