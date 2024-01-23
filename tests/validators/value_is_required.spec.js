describe('is_required', () => {

  const execute = require('../../src/validators/value_is_required');

  it('should set is_required true if value is undefined', () => {

    const state = {
      field: 'created_at',
      request: { body: { } },
      rules: { created_at: { is_required: true  } }
    };

    execute(state);

    expect(state.error).toBeUndefined();
    expect(state.results).toEqual({ created_at: { is_required: true }});
  });

  it('should set is_required true if value is null', () => {

    const state = {
      field: 'created_at',
      request: { body: { created_at: null } },
      rules: { created_at: { is_required: true  } }
    };

    execute(state);

    expect(state.error).toBeUndefined();
    expect(state.results).toEqual({ created_at: { is_required: true }});
  });

  it('should set do nothing if is_required is false', () => {

    const state = {
      field: 'created_at',
      request: { body: { created_at: null } },
      rules: { created_at: { is_required: false  } }
    };

    execute(state);

    expect(state.error).toBeUndefined();
    expect(state.results).toBeUndefined();
  });

  it('should set do nothing if is_required is false', () => {

    const state = {
      field: 'created_at',
      request: { body: { } },
      rules: { created_at: { is_required: false  } }
    };

    execute(state);

    expect(state.error).toBeUndefined();
    expect(state.results).toBeUndefined();
  });

  it('should set do nothing if value is set', () => {

    const state = {
      field: 'created_at',
      request: { body: { created_at: 1 } },
      rules: { created_at: { is_required: true  } }
    };

    execute(state);

    expect(state.error).toBeUndefined();
    expect(state.results).toBeUndefined();
  });
});