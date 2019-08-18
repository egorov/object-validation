module.exports = [
  {
    type: 'person',
    payload: {
      firstName: 'Jack',
      lastName: 'Sparrow',
      gender: 'Male'
    },
    expectedValidationResult: null
  },
  {
    type: 'person',
    payload: {},
    expectedValidationResult: {
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
    }
  }
];