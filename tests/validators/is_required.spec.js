describe('is_required', () => {

  const validate = require('../../src/validators/is_required');

  it('should return null', () => {

    expect(validate('value', true)).toBeNull();
    expect(validate('', true)).toBeNull();
    expect(validate(' ', true)).toBeNull();
    expect(validate(true, true)).toBeNull();
    expect(validate(1, true)).toBeNull();
    expect(validate(0, true)).toBeNull();
    expect(validate(-0, true)).toBeNull();
    expect(validate(false, true)).toBeNull();
    expect(validate(() => 1, true)).toBeNull();
    expect(validate({}, true)).toBeNull();
    expect(validate([], true)).toBeNull();
    expect(validate(null, false)).toBeNull();
    expect(validate(void 0, false)).toBeNull();
    expect(validate(null, "true")).toBeNull();
    expect(validate(void 0, "true")).toBeNull();
  });

  it('should return error', () => {

    const result = {
      is_required: true
    };

    expect(validate(null, true)).toEqual(result);
    expect(validate(void 0, true)).toEqual(result);
  });
});