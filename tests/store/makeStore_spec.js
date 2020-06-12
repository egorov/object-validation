describe('makeStore', () => {

  const makeStore = require('../../src/store/makeStore');
  let store = null;

  beforeEach(() => {
    store = makeStore();
  });

  it('should always return new store', () => {
    
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

    store.dispatch({type: 'model'});

    expect(store.getState().rules).toBeNull();
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

  it('should reduce metadata', () => {

    const payload = {
      name: {
        type: 'string'
      }
    };
    const action = {
      type: 'metadata',
      payload
    };

    store.dispatch(action);

    expect(store.getState().metadata).toEqual(payload);
  });

  it('should reduce model', () => {

    const payload = {
      name: {
        first_name: 'jack'
      }
    };
    const action = {
      type: 'model',
      payload
    };

    store.dispatch(action);

    expect(store.getState().model).toEqual(payload);
  });

  it('should reduce fieldName', () => {

    const payload = 'first_name';
    const action = {
      type: 'field name',
      payload
    };

    store.dispatch(action);

    expect(store.getState().fieldName).toEqual(payload);
  });

  it('should reduce fieldValue', () => {

    const payload = 'jack';
    const action = {
      type: 'field value',
      payload
    };

    store.dispatch(action);

    expect(store.getState().fieldValue).toEqual(payload);
  });
});