describe('is_required', () => {

  const is_required = require('../../src/v2_validators/is_required');

  it('should pass', () => {

    const state = {
      validate_field: 'min_value',
      validation_results: {},
      request: {
        body: { min_value: 3 }
      },
      validation_rules: { min_value: { is_required: true }}
    };

    is_required(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should skip', () => {

    const state = {
      validate_field: 'min_value',
      validation_results: {},
      request: {
        body: { }
      },
      validation_rules: { min_value: { is_required: false }}
    };

    is_required(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should fail', () => {

    const state = {
      validate_field: 'min_value',
      validation_results: {},
      request: {
        body: { }
      },
      validation_rules: { min_value: { is_required: true }}
    };

    is_required(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ min_value: { is_required: true }});
  });

  it('should fail', () => {

    const state = {
      validate_field: 'min_value',
      validation_results: {},
      request: {
        body: { min_value: null }
      },
      validation_rules: { min_value: { is_required: true }}
    };

    is_required(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ min_value: { is_required: true }});
  });
});