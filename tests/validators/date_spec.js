describe('date', () => {

  const validate = require('../../src/validators/date');

  it('should return null', () => {

    expect(validate(new Date())).toBeNull();
    expect(validate('2021-04-30T10:00:00.000Z')).toBeNull();
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
    expect(validate('2021-35-38')).toEqual(error);
    expect(validate('2021-14-41T78:00:00.000Z')).toEqual(error);
    expect(validate(new Date('2021-14-41T78:00:00.000Z'))).toEqual(error);
  });
});