module.exports = {
  type: require('./validators/type'),
  is_required: require('./validators/is_required'),
  from_set: require('./validators/from_set'),
  in_range: require('./validators/in_range'),
  min_length: require('./validators/min_length'),
  max_length: require('./validators/max_length')
};