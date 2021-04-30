describe('boolean', () => {

  const validate = require('../../src/validators/boolean');

  it('should return null', () => {

    expect(validate(true)).toBeNull();
    expect(validate(false)).toBeNull();
    expect(validate(new Boolean())).toBeNull();
    expect(validate(new Boolean(1))).toBeNull();
  });

  it('should return error', () => {

    const error = {
      type: 'boolean'
    };

    expect(validate(null)).toEqual(error);
    expect(validate(void 0)).toEqual(error);
    expect(validate(1)).toEqual(error);
    expect(validate('true')).toEqual(error);
    expect(validate({})).toEqual(error);
    expect(validate([])).toEqual(error);
    expect(validate(new Date())).toEqual(error);
    expect(validate(NaN)).toEqual(error);
  });
});