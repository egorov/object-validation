describe('minLength', () => {

  const validate = require('../../src/validators/minLength');
  const array = [
    1, 
    2, 
    3
  ];

  it('should return null', () => {

    expect(validate('echo', 3)).toBeNull();
    expect(validate('echo', 2)).toBeNull();
    expect(validate(array, 2)).toBeNull();
    expect(validate(array, 3)).toBeNull();
    expect(validate(void 0, 1)).toBeNull();
    expect(validate(null, 3)).toBeNull();
    expect(validate(() => 2, 1)).toBeNull();
  });

  it('should return an error', () => {

    expect(validate('echo', 5)).toEqual({it: 'minimum length', is: 5});
    expect(validate(array, 4)).toEqual({it: 'minimum length', is: 4});
    expect(validate({}, 1)).toEqual({it: 'minimum length', is: 1});
    expect(validate(true, 2)).toEqual({it: 'minimum length', is: 2});
    expect(validate(35, 1)).toEqual({it: 'minimum length', is: 1});
  });

  it('should throw length value type error', () => {

    const error = new TypeError('length argument must be positive integer');

    expect(() => validate('echo', 1.22)).toThrow(error);
    expect(() => validate('echo', -1)).toThrow(error);
    expect(() => validate('echo', 0)).toThrow(error);
    expect(() => validate('echo', true)).toThrow(error);
    expect(() => validate('echo', null)).toThrow(error);
    expect(() => validate('echo', void 0)).toThrow(error);
    expect(() => validate('echo', [])).toThrow(error);
    expect(() => validate('echo', {})).toThrow(error);
    expect(() => validate('echo', '55')).toThrow(error);
  });
});