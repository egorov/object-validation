describe('validateField', () => {

  const validators = require('../../src/validators/validators');
  const validateField = require('../../src/validators/validateField');
  const fieldName = 'firstName';
  const rules = [
    { type: 'isString' },
    { type: 'isRequired' },
    { type: 'minLength', constraints: [2]}
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
});