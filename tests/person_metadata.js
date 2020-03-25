module.exports = {
  firstName: [
    { it: 'should be a string' },
    { it: 'value is required' },
    { it: 'minimum length', is: 2 },
    { it: 'maximum length', is: 100 }
  ],
  lastName: [
    { it: 'should be a string' },
    { it: 'value is required' },
    { it: 'minimum length', is: 2 },
    { it: 'maximum length', is: 100 }
  ],
  gender: [
    { 
      it: 'must have a value in the range', 
      of: [
        'Male',
        'Female'
      ]
    },
    { it: 'value is required' }
  ],
  birthDate: [{ it: 'must be an integer' }],
  birthPlace: [
    { it: 'should be a string' },
    { it: 'maximum length', is: 100 }
  ]
};