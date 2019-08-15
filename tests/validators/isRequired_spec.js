describe('isRequired', () => {

  const validate = require('../../src/validators/isRequired');

  it('should return null', () => {

    expect(validate('value')).toBeNull();
    expect(validate('')).toBeNull();
    expect(validate(' ')).toBeNull();
    expect(validate(true)).toBeNull();
    expect(validate(1)).toBeNull();
    expect(validate(() => 1)).toBeNull();
    expect(validate({})).toBeNull();
    expect(validate([])).toBeNull();
  });

  it('should return error', () => {

    const result = {
      type: 'isRequired'
    };

    expect(validate(null)).toEqual(result);
    expect(validate(void 0)).toEqual(result);
  });
});