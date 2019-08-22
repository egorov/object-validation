describe('validateField', () => {

  const validators = require('../src/validators');
  const validateField = require('../src/validateField');
  const fieldName = 'firstName';
  const rules = require('common-objects-metadata').person.firstName;

  it('should return null', () => {

    const context = {
      fieldName,
      value: 'Jack',
      rules,
      validators
    };
    
    expect(validateField(context)).toBeNull();
  });

  it('result should contain minLength', () => {

    const context = {
      fieldName,
      value: 'J',
      rules,
      validators
    };  
    const result = validateField(context);

    expect(result.length).toBe(1);
    expect(result[0]).toEqual(rules[2]);
  });

  it('result should contain isString', () => {

    const context = {
      fieldName,
      value: 35,
      rules,
      validators
    };  
    const result = validateField(context);

    expect(result.length).toBe(3);
    expect(result[0]).toEqual(rules[0]);
    expect(result[1]).toEqual(rules[2]);
    expect(result[2]).toEqual(rules[3]);
  });

  it('result should contain isRequired', () => {

    const context = {
      fieldName,
      value: void 0,
      rules,
      validators
    };  
    const result = validateField(context);

    expect(result.length).toBe(1);
    expect(result[0]).toEqual(rules[1]);
  });

  it('result should contain isString and minLength', () => {

    const context = {
      fieldName,
      value: ['J'],
      rules,
      validators
    };  
    const result = validateField(context);

    expect(result.length).toBe(2);
    expect(result[0]).toEqual(rules[0]);
    expect(result[1]).toEqual(rules[2]);
  });
});