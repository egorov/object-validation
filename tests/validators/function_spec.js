describe('function', () => {

  const validate = require('../../src/validators/function');

  it('should return null', () => {

    expect(validate(function () {})).toBeNull();
    expect(validate(() => {})).toBeNull();
    expect(validate(function sample() {})).toBeNull();
    expect(validate(async function sample() {})).toBeNull();
  });

  it('should return error', () => {

    const error = {
      type: 'function'
    };

    expect(validate(null)).toEqual(error);
    expect(validate(void 0)).toEqual(error);
    expect(validate(1)).toEqual(error);
    expect(validate(true)).toEqual(error);
    expect(validate({})).toEqual(error);
    expect(validate([])).toEqual(error);
    expect(validate('not date')).toEqual(error);
    expect(validate(new Date())).toEqual(error);
  });
});