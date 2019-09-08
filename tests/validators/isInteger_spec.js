describe('isInteger', () => {

  const validate = require('../../src/validators/isInteger');

  it('should return null', () => {

    expect(validate(1)).toBeNull();
    expect(validate(-1)).toBeNull();
    expect(validate(0)).toBeNull();
    expect(validate(void 0)).toBeNull();
    expect(validate(null)).toBeNull();
  });

  it('should return error', () => {

    const error = { 
      it: 'must be an integer' 
    };

    expect(validate(1.44)).toEqual(error);
    expect(validate({})).toEqual(error);
    expect(validate([])).toEqual(error);
    expect(validate('text')).toEqual(error);
    expect(validate(true)).toEqual(error);
  });
});