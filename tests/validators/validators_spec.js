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

  it('should supply maxLength', () => {

    const maxLength = require('../../src/validators/maxLength');

    expect(validators.maxLength).toBe(maxLength);
  });

  it('should supply inRange', () => {

    const inRange = require('../../src/validators/inRange');

    expect(validators.inRange).toBe(inRange);
  });
});