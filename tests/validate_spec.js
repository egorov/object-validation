describe('validate', () => {

  const makeStore = require('../src/store/makeStore');
  const validators = require('../src/validators');
  const personTestResultSet = require('./PersonTestsResultSet');
  const metadata = require('./PersonMetadata');
  const validate = require('../src/validate');
  const store = makeStore();

  store.dispatch({type: 'validators', payload: validators});
  store.dispatch({type: 'metadata', payload: metadata});

  it('should iterate over set', () => {

    for(const item of personTestResultSet) {

      store.dispatch({type: 'model', payload: item.model});

      validate(store);

      expect(store.getState().result).toEqual(item.result);
    }
  });
});