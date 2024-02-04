describe('min_length', () => {

  const min_length = require('../../src/v2_validators/min_length');

  it('shold pass', () => {
    
    const state = {
      validate_field: 'first_name',
      request: { body: { first_name: 'Joe' }},
      validation_results: {},
      validation_rules: { first_name: { min_length: 2 }}
    };

    min_length(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('shold pass', () => {
    
    const state = {
      validate_field: 'first_name',
      request: { body: { first_name: 'Joe' }},
      validation_results: {},
      validation_rules: { first_name: { min_length: 3 }}
    };

    min_length(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('shold skip', () => {
    
    const state = {
      validate_field: 'first_name',
      request: { body: { first_name: undefined }},
      validation_results: {},
      validation_rules: { first_name: { min_length: 10 }}
    };

    min_length(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('shold skip', () => {
    
    const state = {
      validate_field: 'first_name',
      request: { body: { first_name: null }},
      validation_results: {},
      validation_rules: { first_name: { min_length: 10 }}
    };

    min_length(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('shold fail', () => {
    
    const state = {
      validate_field: 'first_name',
      request: { body: { first_name: 'Ja' }},
      validation_results: {},
      validation_rules: { first_name: { min_length: 3 }}
    };

    min_length(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ first_name: { min_length: 3 } });
  });  
});