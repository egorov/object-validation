describe('isFloat', () => {

  const validate = require('../../src/validators/isFloat');

  it('should return null', () => {

    expect(validate(1.23)).toBeNull();
  });

  it('should return error', () => {

    const error = {
      type: 'isFloat'
    };

    expect(validate(45)).toEqual(error);
    expect(validate(null)).toEqual(error);
    expect(validate({})).toEqual(error);
    expect(validate([])).toEqual(error);
    expect(validate('text')).toEqual(error);
    expect(validate(true)).toEqual(error);
  });
});