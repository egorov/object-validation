module.exports = {
  'value is required': require('./validators/isRequired'),
  'should be a string': require('./validators/isString'),
  'minimum length': require('./validators/minLength'),
  'maximum length': require('./validators/maxLength'),
  'must have a value in the range': require('./validators/inRange'),
  'must be an integer': require('./validators/isInteger'),
  'must be a floating point number': require('./validators/isFloat'),
  'should be url': require('./validators/isUrl')
};