describe('is_float', () => {

  const is_float = require('../../src/v2_validators/is_float');

  it('should pass', () => {

    const state = {
      validate_field: 'min_value',
      request: { body: { min_value: 3.14 }},
      validation_results: {},
      validation_rules: { min_value: { type: 'float' }}
    };

    is_float(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should pass', () => {

    const state = {
      validate_field: 'min_value',
      request: { body: { min_value: "3.14" }},
      validation_results: {},
      validation_rules: { min_value: { type: 'float' }}
    };

    is_float(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should skip', () => {

    const state = {
      validate_field: 'min_value',
      request: { body: { }},
      validation_results: {},
      validation_rules: { min_value: { type: 'float' }}
    };

    is_float(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should skip', () => {

    const state = {
      validate_field: 'min_value',
      request: { body: { min_value: null }},
      validation_results: {},
      validation_rules: { min_value: { type: 'float' }}
    };

    is_float(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should fail', () => {

    const state = {
      validate_field: 'min_value',
      request: { body: { min_value: 'true' }},
      validation_results: {},
      validation_rules: { min_value: { type: 'float' }}
    };

    is_float(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ min_value: { type: 'float' }});
  });

  it('should fail', () => {

    const state = {
      validate_field: 'min_value',
      request: { body: { min_value: true }},
      validation_results: {},
      validation_rules: { min_value: { type: 'float' }}
    };

    is_float(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ min_value: { type: 'float' }});
  });

  it('should fail', () => {

    const state = {
      validate_field: 'min_value',
      request: { body: { min_value: 45 }},
      validation_results: {},
      validation_rules: { min_value: { type: 'float' }}
    };

    is_float(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ min_value: { type: 'float' }});
  });

  it('should fail', () => {

    const state = {
      validate_field: 'min_value',
      request: { body: { min_value: '' }},
      validation_results: {},
      validation_rules: { min_value: { type: 'float' }}
    };

    is_float(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ min_value: { type: 'float' }});
  });
});