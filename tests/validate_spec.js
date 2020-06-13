describe('validate', () => {

  const makeStore = require('../src/store/makeStore');
  let store = null;
  const validators = require('../src/validators');
  const metadata = require('./another_person_metadata');
  const model = require('./validators/Person');
  const validate = require('../src/validate');

  beforeEach(() => {
    store = makeStore();
    store.dispatch({type: 'validators', payload: validators});
    store.dispatch({type: 'metadata', payload: metadata});
    store.dispatch({type: 'model', payload: model});
  });

  it('should not return validation errors', () => {

    validate(store);

    expect(store.getState().result).toBeNull();
  });
});