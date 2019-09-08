describe('isFloat', () => {

  const validate = require('../../src/validators/isFloat');

  it('should return null', () => {

    expect(validate(1.23)).toBeNull();
    expect(validate(void 0)).toBeNull();
    expect(validate(null)).toBeNull();
  });

  it('should return error', () => {

    const error = {
      it: 'must be a floating point number'
    };

    expect(validate(45)).toEqual(error);
    expect(validate({})).toEqual(error);
    expect(validate([])).toEqual(error);
    expect(validate('text')).toEqual(error);
    expect(validate(true)).toEqual(error);
  });
});