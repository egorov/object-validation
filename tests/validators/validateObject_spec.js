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

  it('should return total validation failed result', () => {

    context.value = {};
    const result = validateObject(context);
    
    expect(result.firstName.length).toEqual(4);
    expect(result.firstName[0]).toEqual(rules.firstName[0]);
    expect(result.firstName[1]).toEqual(rules.firstName[1]);
    expect(result.firstName[2]).toEqual(rules.firstName[2]);
    expect(result.firstName[3]).toEqual(rules.firstName[3]);

    expect(result.lastName.length).toEqual(4);
    expect(result.lastName[0]).toEqual(rules.lastName[0]);
    expect(result.lastName[1]).toEqual(rules.lastName[1]);
    expect(result.lastName[2]).toEqual(rules.lastName[2]);
    expect(result.lastName[3]).toEqual(rules.lastName[3]);

    expect(result.gender.length).toEqual(2);
    expect(result.gender[0]).toEqual(rules.gender[0]);
    expect(result.gender[1]).toEqual(rules.gender[1]);
  });

  it('should check validation results', () => {

    const resultSet = require('./personResultSet');
    const ruleSet = require('./ruleSet');

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