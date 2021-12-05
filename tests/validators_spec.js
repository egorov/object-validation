describe('validators', () => {

  const actual = require('../src/validators');
  const expected = {
    type: require('../src/validators/type'),
    is_required: require('../src/validators/is_required'),
    from_set: require('../src/validators/from_set'),
    in_range: require('../src/validators/in_range'),
    max_length: require('../src/validators/max_length'),
    min_length: require('../src/validators/min_length'),
    instance_of: require('../src/validators/instance_of')
  };

  it('should contain method', () => {

    for(const property in expected) {

      expect(actual[property]).toBe(expected[property]);
    }
  });
});