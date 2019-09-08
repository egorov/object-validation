describe('validators', () => {

  const validators = require('../src/validators');

  it('should supply isRequired', () => {

    const isRequired = require('../src/validators/isRequired');

    expect(validators['value is required']).toBe(isRequired);
  });

  it('should supply isString', () => {

    const isString = require('../src/validators/isString');

    expect(validators['should be a string']).toBe(isString);
  });

  it('should supply minLength', () => {

    const minLength = require('../src/validators/minLength');

    expect(validators['minimum length']).toBe(minLength);
  });

  it('should supply maxLength', () => {

    const maxLength = require('../src/validators/maxLength');

    expect(validators['maximum length']).toBe(maxLength);
  });

  it('should supply inRange', () => {

    const inRange = require('../src/validators/inRange');

    expect(validators['must have a value in the range']).toBe(inRange);
  });

  it('should supply isInteger', () => {

    const isInteger = require('../src/validators/isInteger');

    expect(validators['must be an integer']).toBe(isInteger);
  });

  it('should supply isFloat', () => {

    const isFloat = require('../src/validators/isFloat');

    expect(validators['must be a floating point number']).toBe(isFloat);
  });

  it('should supply isUrl', () => {

    const isUrl = require('../src/validators/isUrl');

    expect(validators['should be url']).toBe(isUrl);
  });
});