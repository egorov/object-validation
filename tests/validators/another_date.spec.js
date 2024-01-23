describe('another_date', () => {

  const methods = [
    require('../../src/validators/date_is_null'),
    require('../../src/validators/date_is_invalid_date'),
    require('../../src/validators/date_is_undefined'),
    require('../../src/validators/date_is_string')
  ];

  it('should pass', () => {

    const state = {
      request: {
        body: { created_at: new Date() }
      },
      field: 'created_at',
      rules: { created_at: { type: 'date' } }
    };

    for(const validate of methods)
      validate(state);

    expect(state.error).toBeUndefined();
    expect(state.results).toBeUndefined();
  });

  it('should pass', () => {

    const state = {
      request: { body: {} },
      field: 'created_at',
      rules: { created_at: { is_required: false, type: 'date' } }
    };

    for(const validate of methods)
      validate(state);

    expect(state.error).toBeUndefined();
    expect(state.results).toBeUndefined();
  });

  it('should pass', () => {

    const state = {
      request: { body: { created_at: 1239878 } },
      field: 'created_at',
      rules: { created_at: { is_required: false, type: 'date' } }
    };

    for(const validate of methods)
      validate(state);

    expect(state.error).toBeUndefined();
    expect(state.results).toBeUndefined();
  });

  it('should pass', () => {

    const state = {
      request: { body: { created_at: "2023-11-12T10:00:00+05:00" } },
      field: 'created_at',
      rules: { created_at: { is_required: false, type: 'date' } }
    };

    for(const validate of methods)
      validate(state);

    expect(state.error).toBeUndefined();
    expect(state.results).toBeUndefined();
  });

  it('should pass', () => {

    const state = {
      request: { body: { created_at: "2023-11-12T10:00:00+05:00" } },
      field: 'created_at',
      rules: { first_name: { is_required: false, type: 'string' } }
    };

    for(const validate of methods)
      validate(state);

    expect(state.error).toBeUndefined();
    expect(state.results).toBeUndefined();
  });

  it('should fail', () => {

    const state = {
      request: {
        body: { created_at: new Date('wrong date and time') }
      },
      make_validation_results_container: require('../../src/validators/make_validation_results_container'),
      field: 'created_at',
      rules: { created_at: { type: 'date' } }
    };

    for(const validate of methods)
      validate(state);

    expect(state.error).toBeUndefined();
    expect(state.results).toEqual({ created_at: [{ type: 'date' }] });
  });

  it('should fail', () => {

    const state = {
      request: { body: {} },
      field: 'created_at',
      make_validation_results_container: require('../../src/validators/make_validation_results_container'),
      rules: { created_at: { type: 'date' } }
    };

    for(const validate of methods)
      validate(state);

    expect(state.error).toBeUndefined();
    expect(state.results).toEqual({ created_at: [{ type: 'date' }] });
  });
});