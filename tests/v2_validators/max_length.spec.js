describe('max_length', () => {

  const max_length = require('../../src/v2_validators/max_length');

  it('shold pass', () => {
    
    const state = {
      validate_field: 'first_name',
      request: { body: { first_name: 'Joe' }},
      validation_results: {},
      validation_rules: { first_name: { max_length: 10 }}
    };

    max_length(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('shold pass', () => {
    
    const state = {
      validate_field: 'first_name',
      request: { body: { first_name: 'Joe' }},
      validation_results: {},
      validation_rules: { first_name: { max_length: 3 }}
    };

    max_length(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('shold skip', () => {
    
    const state = {
      validate_field: 'first_name',
      request: { body: { first_name: undefined }},
      validation_results: {},
      validation_rules: { first_name: { max_length: 10 }}
    };

    max_length(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('shold skip', () => {
    
    const state = {
      validate_field: 'first_name',
      request: { body: { first_name: null }},
      validation_results: {},
      validation_rules: { first_name: { max_length: 10 }}
    };

    max_length(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('shold skip', () => {
    
    const state = {
      validate_field: 'first_name',
      request: { body: { first_name: '' }},
      validation_results: {},
      validation_rules: { first_name: { max_length: 10 }}
    };

    max_length(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });  

  it('shold fail', () => {
    
    const state = {
      validate_field: 'first_name',
      request: { body: { first_name: 'Jane' }},
      validation_results: {},
      validation_rules: { first_name: { max_length: 3 }}
    };

    max_length(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ first_name: {max_length: 3 } });
  });  
});