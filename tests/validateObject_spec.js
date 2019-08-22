describe('validateObject', () => {

  const validateObject = require('../src/validateObject');
  const validators = require('../src/validators');
  const rules = require('common-objects-metadata').person;
  const context = {
    rules,
    validators
  };

  it('should return null', () => {

    context.value = require('./validators/Person');
    
    expect(validateObject(context)).toBeNull();
  });

  it('should return partial validation failed result', () => {

    context.value = {
      firstName: 'J',
      lastName: 'L',
      gender: 'M'
    };  
    const result = validateObject(context);
    
    expect(result.firstName.length).toEqual(1);
    expect(result.firstName[0]).toEqual(rules.firstName[2]);

    expect(result.lastName.length).toEqual(1);
    expect(result.lastName[0]).toEqual(rules.lastName[2]);

    expect(result.gender.length).toEqual(1);
    expect(result.gender[0]).toEqual(rules.gender[0]);
  });

  it('should check validation results', () => {

    const resultSet = require('./validators/personResultSet');
    const ruleSet = require('common-objects-metadata');

    for(const dto of resultSet) {

      const ctx = {
        value: dto.payload,
        rules: ruleSet[dto.type],
        validators
      };
      const result = validateObject(ctx);
      
      expect(result).toEqual(dto.expectedValidationResult);
    }
  });
});