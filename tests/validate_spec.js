describe('validate', () => {

  const personTestResultSet = require('./PersonTestsResultSet');
  const validate = require('../src/validate');
  const state = {
    validators: require('../src/validators'),
    metadata: require('./PersonMetadata')
  };

  it('should iterate over set', () => {

    for(const item of personTestResultSet) {

      state.model = item.model;

      validate(state);

      expect(state.result).toEqual(item.result);
    }
  });
});