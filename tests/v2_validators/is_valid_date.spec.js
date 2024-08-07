describe('is_valid_date', () => {

  const is_valid_date = require('../../src/v2_validators/is_valid_date');

  it('should pass', () => {

    const state = {
      validate_field: 'created_at',
      validation_results: {},
      request: {
        body: { created_at: new Date() }
      },
      validation_rules: { created_at: { type: 'date' }}
    };

    is_valid_date(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should skip', () => {

    const state = {
      validate_field: 'created_at',
      validation_results: {},
      request: {
        body: { created_at: '2024-01-03T10:00:00.0Z' }
      },
      validation_rules: { created_at: { type: 'date' }}
    };

    is_valid_date(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should skip', () => {

    const state = {
      validate_field: 'created_at',
      validation_results: {},
      request: {
        body: { }
      },
      validation_rules: { created_at: { type: 'date' }}
    };

    is_valid_date(state);

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

    is_valid_date(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should skip', () => {

    const state = {
      validate_field: 'created_at',
      validation_results: {},
      request: {
        body: { created_at: '' }
      },
      validation_rules: { created_at: { type: 'date' }}
    };

    is_valid_date(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });   

  it('should fail', () => {

    const state = {
      validate_field: 'created_at',
      validation_results: {},
      request: {
        body: { created_at: new Date('invalid date') }
      },
      validation_rules: { created_at: { type: 'date' }}
    };

    is_valid_date(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ created_at: { type: 'date' }});
  });
});