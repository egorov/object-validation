describe('float', () => {

  const validate = 
    require('../../src/validators/float');

  it('should return null', () => {

    expect(validate(1.23)).toBeNull();
    expect(validate(-1.23)).toBeNull();
    expect(validate(0)).toBeNull();
    expect(validate(0.43)).toBeNull();
    expect(validate(void 0)).toBeNull();
    expect(validate(null)).toBeNull();
    expect(validate('1.23')).toBeNull();
  });

  it('should return error', () => {

    const error = {
      type: 'float'
    };

    expect(validate(45)).toEqual(error);
    expect(validate({})).toEqual(error);
    expect(validate([])).toEqual(error);
    expect(validate('text')).toEqual(error);
    expect(validate(true)).toEqual(error);
    expect(validate('45')).toEqual(error);
    expect(validate(332.00)).toEqual(error);
  });
});