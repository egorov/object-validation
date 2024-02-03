describe('is_string_date', () => {

  const is_string_date = require('../../src/v2_validators/is_string_date');

  it('should pass', () => {

    const state = {
      validate_field: 'created_at',
      validation_results: {},
      request: {
        body: { created_at: '2024-01-03T10:00:00+05:00' }
      },
      validation_rules: { created_at: { type: 'date' }}
    };

    is_string_date(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should skip', () => {

    const state = {
      validate_field: 'created_at',
      validation_results: {},
      request: {
        body: { created_at: 38882 }
      },
      validation_rules: { created_at: { type: 'date' }}
    };

    is_string_date(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should fail', () => {

    const state = {
      validate_field: 'created_at',
      validation_results: {},
      request: {
        body: { created_at: 'Hello World' }
      },
      validation_rules: { created_at: { type: 'date' }}
    };

    is_string_date(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ created_at: { type: 'date' }});
  });
});