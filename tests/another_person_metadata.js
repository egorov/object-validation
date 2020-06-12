module.exports = {
  firstName: {
    type: 'string',
    is_required: true,
    min_length: 2,
    max_length: 100
  },
  lastName: {
    type: 'string',
    is_required: true,
    min_length: 2,
    max_length: 100
  },
  gender: {
    from_set: [
      'Male',
      'Female'
    ],
    is_required: true
  },
  birthDate: {
    type: 'integer'
  },
  birthPlace: {
    type: 'string',
    max_length: 100
  }
};