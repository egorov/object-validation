describe('validateInteger', () => {

  const validateInteger = require('../../src/validators/validateInteger');

  it('should throw if value is not positive integer', () => {

    const name = 'length';
    const msg = `${name} argument must be positive integer`;
    const error = new TypeError(msg);


    expect(() => validateInteger(-1, 'length')).toThrow(error);
    expect(() => validateInteger(0, 'length')).toThrow(error);
    expect(() => validateInteger(1.23, 'length')).toThrow(error);
    expect(() => validateInteger('echo', 'length')).toThrow(error);
    expect(() => validateInteger(true, 'length')).toThrow(error);
    expect(() => validateInteger([], 'length')).toThrow(error);
    expect(() => validateInteger(null, 'length')).toThrow(error);
    expect(() => validateInteger(void 0, 'length')).toThrow(error);
    expect(() => validateInteger({}, 'length')).toThrow(error);
    expect(() => validateInteger(() => 1, 'length')).toThrow(error);
  });

  it('should throw if name is not a string', () => {

    const error = new TypeError('name value should be not empty string');

    expect(() => validateInteger(1, true)).toThrow(error);
    expect(() => validateInteger(1, [])).toThrow(error);
    expect(() => validateInteger(1, {})).toThrow(error);
    expect(() => validateInteger(1, -1)).toThrow(error);
    expect(() => validateInteger(1, null)).toThrow(error);
    expect(() => validateInteger(1, void 0)).toThrow(error);
    expect(() => validateInteger(1, () => 1)).toThrow(error);
    expect(() => validateInteger(1, '')).toThrow(error);
    expect(() => validateInteger(1, ' ')).toThrow(error);
  });

  it('should pass', () => {

    expect(() => validateInteger(1, 'max')).not.toThrow();
  });
});