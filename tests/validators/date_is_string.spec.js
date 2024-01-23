describe('date_is_string', () => {

  const handle = require('../../src/validators/date_is_string');

  it('should pass', () => {

    const state = {
      request: { body: {} },
      field: 'created_at',
      rules: { created_at: { is_required: false, type: 'date' } }
    };

    handle(state);

    expect(state.error).toBeUndefined();
    expect(state.results).toBeUndefined();
  });

  it('should pass', () => {

    const state = {
      request: { body: { created_at: "2023-11-12T10:00:00+05:00" } },
      field: 'created_at',
      rules: { created_at: { is_required: false, type: 'date' } }
    };

    handle(state);

    expect(state.error).toBeUndefined();
    expect(state.results).toBeUndefined();
  });

  it('should pass', () => {

    const state = {
      request: { body: { created_at: "2023-11-12T10:00:00+05:00" } },
      field: 'created_at',
      rules: { first_name: { is_required: false, type: 'string' } }
    };

    handle(state);

    expect(state.error).toBeUndefined();
    expect(state.results).toBeUndefined();
  });

  it('should fail', () => {

    const state = {
      request: { body: { created_at: "wrong date and time" } },
      field: 'created_at',
      make_validation_results_container: require('../../src/validators/make_validation_results_container'),
      rules: { created_at: { is_required: false, type: 'date' } }
    };

    handle(state);

    expect(state.error).toBeUndefined();
    expect(state.results).toEqual({ created_at: [{ type: 'date' }] });
  });
});