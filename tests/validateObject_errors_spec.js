describe('validateObject', () => {

  const validateObject = require('../src/validateObject');
  const validators = require('../src/validators');
  const person = require('./validators/Person');
  const rules = require('common-objects-metadata').person;

  it('should throw if value is undefined', () => {

    const error = new Error('validation context must contain value object');
    const context = {
      rules,
      validators
    };

    expect(() => validateObject(context)).toThrow(error);
  });


  it('should throw if rules is undefined', () => {

    const error = new Error('validation context must contain rules object');
    const context = {
      value: person,
      validators
    };

    expect(() => validateObject(context)).toThrow(error);
  });

  it('should throw if validators is undefined', () => {

    const error = 
      new Error('validation context must contain validators object');
    const context = {
      value: person,
      rules
    };

    expect(() => validateObject(context)).toThrow(error);
  });
});