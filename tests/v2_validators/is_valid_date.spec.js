describe('is_valid_date', () => {

  const is_valid_date = require('../../src/v2_validators/is_valid_date');

  it('should pass', () => {

    const state = {
      field: 'created_at',
      results: {},
      request: {
        body: { created_at: new Date() }
      },
      rules: { created_at: { type: 'date' }}
    };

    is_valid_date(state);

    expect(state.error).toBeUndefined();
    expect(state.results).toEqual({});
  });

  it('should skip', () => {

    const state = {
      field: 'created_at',
      results: {},
      request: {
        body: { created_at: '2024-01-03T10:00:00.0Z' }
      },
      rules: { created_at: { type: 'date' }}
    };

    is_valid_date(state);

    expect(state.error).toBeUndefined();
    expect(state.results).toEqual({});
  });

  it('should fail', () => {

    const state = {
      field: 'created_at',
      results: {},
      request: {
        body: { created_at: new Date('invalid date') }
      },
      rules: { created_at: { type: 'date' }}
    };

    is_valid_date(state);

    expect(state.error).toBeUndefined();
    expect(state.results).toEqual({ created_at: { type: 'date' }});
  });
});