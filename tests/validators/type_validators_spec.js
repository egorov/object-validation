describe('type validators', () => {

  const validators = require('../../src/validators/type_validators');
  const expected = {
    boolean: require('../../src/validators/boolean'),
    date: require('../../src/validators/date'),
    email: require('../../src/validators/email'),
    number: require('../../src/validators/number'),
    float: require('../../src/validators/float'),
    function: require('../../src/validators/function'),
    integer: require('../../src/validators/integer'),
    phone: require('../../src/validators/phone'),
    string: require('../../src/validators/string'),
    url: require('../../src/validators/url') 
  }

  it('should contain validators', () => {

    for(const property in expected) {

      expect(validators[property]).toEqual(expected[property]);
    }
  });
});