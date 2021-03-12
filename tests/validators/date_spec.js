describe('date', () => {

  const validate = require('../../src/validators/date');

  it('should return null', () => {

    expect(validate(new Date())).toBeNull();
  });

  it('should return error', () => {

    const error = {
      type: 'date'
    };

    expect(validate(null)).toEqual(error);
    expect(validate(void 0)).toEqual(error);
    expect(validate(1)).toEqual(error);
    expect(validate(true)).toEqual(error);
    expect(validate({})).toEqual(error);
    expect(validate([])).toEqual(error);
    expect(validate('not date')).toEqual(error);
  });
});