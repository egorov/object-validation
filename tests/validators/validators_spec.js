describe('validators', () => {

  const validators = require('../../src/validators/validators');

  it('should supply isRequired', () => {

    const isRequired = require('../../src/validators/isRequired');

    expect(validators.isRequired).toBe(isRequired);
  });

  it('should supply isString', () => {

    const isString = require('../../src/validators/isString');

    expect(validators.isString).toBe(isString);
  });

  it('should supply minLength', () => {

    const minLength = require('../../src/validators/minLength');

    expect(validators.minLength).toBe(minLength);
  });
});