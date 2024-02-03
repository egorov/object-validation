describe('is_number_date', () => {

  const is_number_date = require('../../src/v2_validators/is_number_date');

  it('should pass', () => {
    const state = {
      field: 'created_at',
      results: {},
      request: {
        body: { created_at: 3263737 }
      },
      rules: { created_at: { type: 'date' }}
    };

    is_number_date(state);

    expect(state.error).toBeUndefined();
    expect(state.results).toEqual({});
  });

  it('should pass', () => {
    const state = {
      field: 'created_at',
      results: {},
      request: {
        body: { created_at: -3263737 }
      },
      rules: { created_at: { type: 'date' }}
    };

    is_number_date(state);

    expect(state.error).toBeUndefined();
    expect(state.results).toEqual({});
  });

  it('should skip', () => {
    const state = {
      field: 'created_at',
      results: {},
      request: {
        body: { created_at: new Date() }
      },
      rules: { created_at: { type: 'date' }}
    };

    is_number_date(state);

    expect(state.error).toBeUndefined();
    expect(state.results).toEqual({});
  });

  it('should fail', () => {
    const state = {
      field: 'created_at',
      results: {},
      request: {
        body: { created_at: -38989827673829834 }
      },
      rules: { created_at: { type: 'date' }}
    };

    is_number_date(state);

    expect(state.error).toBeUndefined();
    expect(state.results).toEqual({ created_at: { type: 'date' }});
  });  
});