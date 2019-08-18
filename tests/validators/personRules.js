module.exports = {
  firstName: [
    { type: 'isString' },
    { type: 'isRequired' },
    { type: 'minLength', constraints: [2] },
    { type: 'maxLength', constraints: [100] }
  ],
  lastName: [
    { type: 'isString' },
    { type: 'isRequired' },
    { type: 'minLength', constraints: [2] },
    { type: 'maxLength', constraints: [100] }
  ],
  gender: [
    { 
      type: 'inRange', 
      constraints: [
        'Male',
        'Female'
      ]
    },
    { type: 'isRequired' }
  ]
};