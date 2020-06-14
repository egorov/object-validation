module.exports = [
  {
    model: {
      firstName: 'Jack',
      lastName: 'Sparrow',
      gender: 'Male'
    },
    result: null
  },
  {
    model: {},
    result: {
      gender: [
        { from_set: [ 'Male', 'Female' ] }
      ]
    }
  },
  {
    model: {
      firstName: 'a',
      lastName: 'b',
      gender: 'Female'
    },
    result: {
      firstName: [
        { min_length: 2 }
      ],
      lastName: [
        { min_length: 2 }
      ]
    }
  },
  {
    model: {
      firstName: 'Abe',      
      gender: 'Man',
      birthDate: true
    },
    result: {
      gender: [
        { from_set: [ 'Male', 'Female' ] }
      ],
      birthDate: [
        { type: 'integer' }
      ]
    }
  }
];