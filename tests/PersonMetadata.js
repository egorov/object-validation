module.exports = {
  firstName: {
    type: 'string',
    min_length: 2,
    max_length: 100
  },
  lastName: {
    type: 'string',
    min_length: 2,
    max_length: 100
  },
  gender: {
    from_set: [
      'Male',
      'Female'
    ]
  },
  birthDate: {
    type: 'integer'
  },
  birthPlace: {
    type: 'string',
    max_length: 100
  }
};