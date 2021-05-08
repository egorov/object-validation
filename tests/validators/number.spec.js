describe('number', () => {

  const validate = require('../../src/validators/number');

  it('should return null', () => {

    expect(validate(1)).toBeNull();
    expect(validate(-1)).toBeNull();
    expect(validate(0)).toBeNull();
    expect(validate(-0)).toBeNull();
    expect(validate(void 0)).toBeNull();
    expect(validate(null)).toBeNull();
    expect(validate('1')).toBeNull();
    expect(validate('1.01')).toBeNull();
    expect(validate('-0')).toBeNull();
  });

  it('should return error', () => {

    const error = { 
      type: 'number' 
    };

    expect(validate({})).toEqual(error);
    expect(validate([])).toEqual(error);
    expect(validate('text')).toEqual(error);
    expect(validate(true)).toEqual(error);
    expect(validate(() => 1)).toEqual(error);
  });
});