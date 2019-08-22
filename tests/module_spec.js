describe('module', () => {

  const module = require('../index');

  it('should export validateField', () => {
    
    const validateField = require('../src/validateField');

    expect(module.validateField).toEqual(validateField);
  });

  it('should export validateObject', () => {

    const validateObject = require('../src/validateObject');

    expect(module.validateObject).toEqual(validateObject);
  });

  it('should export validators', () => {

    const validators = require('../src/validators');

    expect(module.validators).toEqual(validators);
  });
});