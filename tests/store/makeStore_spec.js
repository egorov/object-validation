describe('makeStore', () => {

  const makeStore = require('../../src/store/makeStore');
  let store = null;

  beforeEach(() => {
    store = makeStore();
  });

  it('should always return new value', () => {
    
    const one = makeStore();
    const another = makeStore();

    expect(one).not.toBe(another);
  })

  it('should reduce validators', () => {

    const payload = {
      'type validators': {}
    };
    const action = {
      type: 'validators',
      payload
    };

    store.dispatch(action);

    expect(store.getState().validators).toEqual(payload);
  });

  it('should reduce value', () => {

    const payload = {
      name: 'jack'
    };
    const action = {
      type: 'value',
      payload
    };

    store.dispatch(action);

    expect(store.getState().value).toEqual(payload);
  });

  it('should reduce rules', () => {

    const payload = {
      name: {
        type: 'string'
      }
    };
    const action = {
      type: 'rules',
      payload
    };

    store.dispatch(action);

    expect(store.getState().rules).toEqual(payload);
  });

  it('should reduce validation result', () => {

    const payload = {
      name: {
        type: 'string'
      }
    };
    const action = {
      type: 'validation result',
      payload
    };

    store.dispatch(action);

    expect(store.getState().result).toEqual(payload);
  });

  it('should clear validation result', () => {

    const action = {
      type: 'clear validation result'
    };

    store.dispatch(action);

    expect(store.getState().result).toBeNull();
  });
});