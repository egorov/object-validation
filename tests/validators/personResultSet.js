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
      firstName: [{ type: 'isRequired' }],
      lastName: [{ type: 'isRequired' }],
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