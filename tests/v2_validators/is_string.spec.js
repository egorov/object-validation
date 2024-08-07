describe('is_string', () => {

  const is_string = require('../../src/v2_validators/is_string');

  it('should pass', () => {

    const state = {
      validate_field: 'first_name',
      request: { body: { first_name: 'Joe' }},
      validation_results: {},
      validation_rules: { first_name: { type: 'string' }}
    };

    is_string(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should skip', () => {

    const state = {
      validate_field: 'first_name',
      request: { body: { }},
      validation_results: {},
      validation_rules: { first_name: { type: 'string' }}
    };

    is_string(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should skip', () => {

    const state = {
      validate_field: 'first_name',
      request: { body: { first_name: null }},
      validation_results: {},
      validation_rules: { first_name: { type: 'string' }}
    };

    is_string(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should pass', () => {

    const state = {
      validate_field: 'first_name',
      request: { body: { first_name: '' }},
      validation_results: {},
      validation_rules: { first_name: { type: 'string' }}
    };

    is_string(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should fail', () => {

    const state = {
      validate_field: 'first_name',
      request: { body: { first_name: true }},
      validation_results: {},
      validation_rules: { first_name: { type: 'string' }}
    };

    is_string(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ first_name: { type: 'string' }});
  });

  it('should fail', () => {

    const state = {
      validate_field: 'first_name',
      request: { body: { first_name: 1 }},
      validation_results: {},
      validation_rules: { first_name: { type: 'string' }}
    };

    is_string(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ first_name: { type: 'string' }});
  });

  it('should fail', () => {

    const state = {
      validate_field: 'first_name',
      request: { body: { first_name: new Date() }},
      validation_results: {},
      validation_rules: { first_name: { type: 'string' }}
    };

    is_string(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ first_name: { type: 'string' }});
  });
});