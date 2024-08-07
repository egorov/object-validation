describe('is_integer', () => {

  const is_integer = require('../../src/v2_validators/is_integer');

  it('should pass', () => {

    const state = {
      validate_field: 'min_value',
      request: { body: { min_value: 3 }},
      validation_results: {},
      validation_rules: { min_value: { type: 'integer' }}
    };

    is_integer(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should pass', () => {

    const state = {
      validate_field: 'min_value',
      request: { body: { min_value: "3" }},
      validation_results: {},
      validation_rules: { min_value: { type: 'integer' }}
    };

    is_integer(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should skip', () => {

    const state = {
      validate_field: 'min_value',
      request: { body: { }},
      validation_results: {},
      validation_rules: { min_value: { type: 'integer' }}
    };

    is_integer(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should skip', () => {

    const state = {
      validate_field: 'min_value',
      request: { body: { min_value: null }},
      validation_results: {},
      validation_rules: { min_value: { type: 'integer' }}
    };

    is_integer(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should fail', () => {

    const state = {
      validate_field: 'min_value',
      request: { body: { min_value: 'true' }},
      validation_results: {},
      validation_rules: { min_value: { type: 'integer' }}
    };

    is_integer(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ min_value: { type: 'integer' }});
  });

  it('should fail', () => {

    const state = {
      validate_field: 'min_value',
      request: { body: { min_value: true }},
      validation_results: {},
      validation_rules: { min_value: { type: 'integer' }}
    };

    is_integer(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ min_value: { type: 'integer' }});
  });

  it('should fail', () => {

    const state = {
      validate_field: 'min_value',
      request: { body: { min_value: 45.38 }},
      validation_results: {},
      validation_rules: { min_value: { type: 'integer' }}
    };

    is_integer(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ min_value: { type: 'integer' }});
  });

  it('should fail', () => {

    const state = {
      validate_field: 'min_value',
      request: { body: { min_value: '' }},
      validation_results: {},
      validation_rules: { min_value: { type: 'integer' }}
    };

    is_integer(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ min_value: { type: 'integer' }});
  });  
});