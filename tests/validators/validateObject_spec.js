describe('validateObject', () => {

  const validateObject = require('../../src/validators/validateObject');
  const validators = require('../../src/validators/validators');
  const rules = require('./personRules');
  const context = {
    rules,
    validators
  };

  it('should return null', () => {

    context.value = require('./Person');
    
    expect(validateObject(context)).toBeNull();
  });

  it('should return validation result', () => {

    context.value = {
      firstName: 'J',
      lastName: 'L'
    };  
    const result = validateObject(context);

    expect(result.firstName.length).toEqual(1);
    expect(result.firstName[0]).toEqual(rules.firstName[2]);

    expect(result.lastName.length).toEqual(1);
    expect(result.lastName[0]).toEqual(rules.lastName[2]);
  });
});