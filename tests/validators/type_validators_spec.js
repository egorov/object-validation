describe('type validators', () => {

  const validators = require('../../src/validators/type_validators');
  const expected = {
    integer: require('../../src/validators/integer'),
    string: require('../../src/validators/string')    
  }

  it('should contain validators', () => {

    for(const property in expected) {

      expect(validators[property]).toEqual(expected[property]);
    }
  });
});