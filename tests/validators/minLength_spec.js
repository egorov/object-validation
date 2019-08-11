describe('minLength', () => {

  const validate = require('../../src/validators/minLength');
  const array = [
    1, 
    2, 
    3
  ];

  it('should return null', () => {

    expect(validate('echo', 3)).toBeNull();
    expect(validate(array, 2)).toBeNull();
    expect(validate({}, 1)).toBeNull();
    expect(validate(true, 2)).toBeNull();
    expect(validate(() => 2, 1)).toBeNull();
    expect(validate(35, 1)).toBeNull();
  });

  it('should return an error', () => {

    const error = 'value length is too short';

    expect(validate('echo', 5)).toEqual(error);
    expect(validate(array, 4)).toEqual(error);
  });

  it('should throw an error', () => {

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