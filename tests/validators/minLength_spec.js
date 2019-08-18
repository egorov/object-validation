describe('minLength', () => {

  const validate = require('../../src/validators/minLength');
  const array = [
    1, 
    2, 
    3
  ];

  it('should return null', () => {

    expect(validate('echo', [3])).toBeNull();
    expect(validate('echo', [2])).toBeNull();
    expect(validate(array, [2])).toBeNull();
    expect(validate(array, [3])).toBeNull();
  });

  it('should return an error', () => {

    const type = 'minLength';

    expect(validate('echo', [5])).toEqual({type, constraints: [5]});
    expect(validate(array, [4])).toEqual({type, constraints: [4]});
    expect(validate(void 0, [1])).toEqual({type, constraints: [1]});
    expect(validate(null, [3])).toEqual({type, constraints: [3]});
    expect(validate({}, [1])).toEqual({type, constraints: [1]});
    expect(validate(true, [2])).toEqual({type, constraints: [2]});
    expect(validate(() => 2, [1])).toEqual({type, constraints: [1]});
    expect(validate(35, [1])).toEqual({type, constraints: [1]});
  });

  it('should throw length value type error', () => {

    const error = new TypeError('length argument must be positive integer');

    expect(() => validate('echo', [1.22])).toThrow(error);
    expect(() => validate('echo', [-1])).toThrow(error);
    expect(() => validate('echo', [0])).toThrow(error);
    expect(() => validate('echo', [true])).toThrow(error);
    expect(() => validate('echo', [null])).toThrow(error);
    expect(() => validate('echo', [void 0])).toThrow(error);
    expect(() => validate('echo', [[]])).toThrow(error);
    expect(() => validate('echo', [{}])).toThrow(error);
    expect(() => validate('echo', ['55'])).toThrow(error);
  });

  it('should throw constraints type error', () => {

    const error = new TypeError('constraints value should be an array');

    expect(() => validate('echo', 3)).toThrow(error);
    expect(() => validate('echo', 1.22)).toThrow(error);
    expect(() => validate('echo', -2)).toThrow(error);
    expect(() => validate('echo', 0)).toThrow(error);
    expect(() => validate('echo', true)).toThrow(error);
    expect(() => validate('echo', null)).toThrow(error);
    expect(() => validate('echo', void 0)).toThrow(error);
    expect(() => validate('echo', {})).toThrow(error);
    expect(() => validate('echo', '66')).toThrow(error);
  });

  it('should throw constraint length error', () => {

    const error = new Error('constraints should contain values');

    expect(() => validate('echo', [])).toThrow(error);
  });
});