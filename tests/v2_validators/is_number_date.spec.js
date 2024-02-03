describe('is_number_date', () => {

  const is_number_date = require('../../src/v2_validators/is_number_date');

  it('should pass', () => {
    const state = {
      validate_field: 'created_at',
      validation_results: {},
      request: {
        body: { created_at: 3263737 }
      },
      validation_rules: { created_at: { type: 'date' }}
    };

    is_number_date(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should pass', () => {
    const state = {
      validate_field: 'created_at',
      validation_results: {},
      request: {
        body: { created_at: -3263737 }
      },
      validation_rules: { created_at: { type: 'date' }}
    };

    is_number_date(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should skip', () => {
    const state = {
      validate_field: 'created_at',
      validation_results: {},
      request: {
        body: { created_at: null }
      },
      validation_rules: { created_at: { type: 'date' }}
    };

    is_number_date(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should skip', () => {
    const state = {
      validate_field: 'created_at',
      validation_results: {},
      request: {
        body: { created_at: new Date() }
      },
      validation_rules: { created_at: { type: 'date' }}
    };

    is_number_date(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should fail', () => {
    const state = {
      validate_field: 'created_at',
      validation_results: {},
      request: {
        body: { created_at: -38989827673829834 }
      },
      validation_rules: { created_at: { type: 'date' }}
    };

    is_number_date(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ created_at: { type: 'date' }});
  });  
});