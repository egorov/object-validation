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
      firstName: [{ it: 'value is required' }],
      lastName: [{ it: 'value is required' }],
      gender: [
        { 
          it: 'must have a value in the range', 
          of: [
            'Male',
            'Female'
          ]
        },
        { it: 'value is required' }
      ]
    }
  }
];