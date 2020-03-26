describe('type validators', () => {

  const validators = require('../../src/validators/type_validators');

  it('should contain string validator', () => {

    const validator = require('../../src/validators/string');

    expect(validators.string).toEqual(validator);
  });
});