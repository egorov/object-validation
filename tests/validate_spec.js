describe('validate', () => {

  const personTestResultSet = require('./PersonTestsResultSet');
  const validate = require('../src/validate');
  let state = null;

  beforeEach(() => {
    state = {
      validators: require('../src/validators'),
      metadata: require('./PersonMetadata')
    };
  });

  it('should iterate over set', () => {

    for(const item of personTestResultSet) {

      state.model = item.model;

      validate(state);

      expect(state.result).toEqual(item.result);
    }
  });

  it('should throw if no data to validate', () => {

    expect(
      () => validate(state)
    ).toThrow(
      new TypeError('state.model must be object')
    );
  });

  it('should throw if no metadata to validate', () => {

    const state = {
      model: {}
    };

    expect(
      () => validate(state)
    ).toThrow(
      new TypeError('state.metadata must be object')
    );
  });
});