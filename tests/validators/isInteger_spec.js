describe('isInteger', () => {

  const validate = require('../../src/validators/isInteger');

  it('should return null', () => {

    expect(validate(1)).toBeNull();
    expect(validate(-1)).toBeNull();
    expect(validate(0)).toBeNull();
  });

  it('should return error', () => {

    expect(validate(1.44)).toEqual({ type: 'isInteger' });
    expect(validate(null)).toEqual({ type: 'isInteger' });
    expect(validate({})).toEqual({ type: 'isInteger' });
    expect(validate([])).toEqual({ type: 'isInteger' });
    expect(validate('text')).toEqual({ type: 'isInteger' });
    expect(validate(true)).toEqual({ type: 'isInteger' });
  });
});