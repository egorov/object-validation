describe('module', () => {

  const module = require('../index');
  const validators = require('../src/validators');
  const ValidateCommand = require('../src/ValidateCommand');
  const validate = require('../src/validate');

  it('should export', () => {


    expect(module.validators).toEqual(validators);
    expect(module.ValidateCommand).toEqual(ValidateCommand);
    expect(module.validate).toEqual(validate);
  });
});