describe('is_required', () => {

  const validate = require('../../src/validators/is_required');

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
      is_required: true
    };

    expect(validate(null)).toEqual(result);
    expect(validate(void 0)).toEqual(result);
  });
});