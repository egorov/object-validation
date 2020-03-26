describe('type validators', () => {

  const validators = require('../../src/validators/type_validators');
  const expected = {
    float: require('../../src/validators/float'),
    integer: require('../../src/validators/integer'),
    string: require('../../src/validators/string'),
    url: require('../../src/validators/url') 
  }

  it('should contain validators', () => {

    for(const property in expected) {

      expect(validators[property]).toEqual(expected[property]);
    }
  });
});