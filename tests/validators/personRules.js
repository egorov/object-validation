module.exports = {
  firstName: [
    { type: 'isString' },
    { type: 'isRequired' },
    { type: 'minLength', constraints: [2] },
    { type: 'maxLength', constraints: [50] }
  ],
  lastName: [
    { type: 'isString' },
    { type: 'isRequired' },
    { type: 'minLength', constraints: [2] },
    { type: 'maxLength', constraints: [50] }
  ]
};