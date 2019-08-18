describe('validateField', () => {

  const validators = require('../../src/validators/validators');
  const validateField = require('../../src/validators/validateField');
  const fieldName = 'firstName';
  const rules = [
    { type: 'isString' },
    { type: 'isRequired' },
    { type: 'minLength', constraints: [2] },
    { type: 'maxLength', constraints: [10] }
  ];

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

    expect(result.length).toBe(4);
    expect(result[0]).toEqual(rules[0]);
    expect(result[1]).toEqual(rules[1]);
    expect(result[2]).toEqual(rules[2]);
    expect(result[3]).toEqual(rules[3]);
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