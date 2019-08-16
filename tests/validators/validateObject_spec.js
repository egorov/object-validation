describe('validateObject', () => {

  const validateObject = require('../../src/validators/validateObject');
  const validators = require('../../src/validators/validators');
  const rules = {
    firstName: [
      { type: 'isString' },
      { type: 'isRequired' },
      { type: 'minLength', constraints: [3] },
      { type: 'maxLength', constraints: [20] }
    ],
    lastName: [
      { type: 'isString' },
      { type: 'isRequired' },
      { type: 'minLength', constraints: [3] },
      { type: 'maxLength', constraints: [20] }
    ]
  };

  it('should return null', () => {

    const value = {
      firstName: 'Jack',
      lastName: 'Sparrow'
    };
    const context = {
      value,
      rules,
      validators
    };
    
    expect(validateObject(context)).toBeNull();
  });

  it('should return validation result', () => {

    const value = {
      firstName: 'Ja',
      lastName: 'Lo'
    };
    const context = {
      value,
      rules,
      validators
    };
    const result = validateObject(context);

    expect(result.firstName.length).toEqual(1);
    expect(result.firstName[0]).toEqual(rules.firstName[2]);

    expect(result.lastName.length).toEqual(1);
    expect(result.lastName[0]).toEqual(rules.lastName[2]);
  });
});