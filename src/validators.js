const isRequired = require('./validators/isRequired');
const isString = require('./validators/isString');
const minLength = require('./validators/minLength');
const maxLength = require('./validators/maxLength');
const inRange = require('./validators/inRange');
const isInteger = require('./validators/isInteger');
const isFloat = require('./validators/isFloat');
const isUrl = require('./validators/isUrl');

module.exports = {
  isRequired,
  isString,
  minLength,
  maxLength,
  inRange,
  isInteger,
  isFloat,
  isUrl
};