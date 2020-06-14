describe('module', () => {

  const module = require('../index');
  const validators = require('../src/validators');
  const validate = require('../src/validate');
  const ValidateCommand = require('../src/ValidateCommand');

  it('should export', () => {


    expect(module.validators).toEqual(validators);
    expect(module.ValidateCommand).toEqual(ValidateCommand);
    expect(module.validate).toEqual(validate);
  });
});