describe('validateConstraints', () => {

  const validateConstraints = 
    require('../../src/validators/validateConstraints');

  it('should throw if is not array', () => {

    const error = new TypeError('constraints value should be an array');

    expect(() => validateConstraints(true)).toThrow(error);
    expect(() => validateConstraints(1)).toThrow(error);
    expect(() => validateConstraints(1.0)).toThrow(error);
    expect(() => validateConstraints('str')).toThrow(error);
    expect(() => validateConstraints({})).toThrow(error);
    expect(() => validateConstraints(null)).toThrow(error);
    expect(() => validateConstraints(void 0)).toThrow(error);
    expect(() => validateConstraints(() => 1)).toThrow(error);
  });

  it('should throw if array is empty', () => {

    const error = new Error('constraints should contain values');

    expect(() => validateConstraints([])).toThrow(error);
  });

  it('should pass', () => {

    expect(() => validateConstraints([1])).not.toThrow();
  });
});