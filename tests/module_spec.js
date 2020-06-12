describe('module', () => {

  const module = require('../index');

  it('should export validators', () => {

    const validators = require('../src/validators');

    expect(module.validators).toEqual(validators);
  });
});