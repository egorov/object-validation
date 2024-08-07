describe('is_email', () => {

  const is_email = require('../../src/v2_validators/is_email');

  it('shold pass', () => {
    
    const state = {
      validate_field: 'contact_email',
      request: { body: { contact_email: 'a@ibm.com' }},
      validation_results: {},
      validation_rules: { contact_email: { type: 'email' }}
    };

    is_email(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('shold skip', () => {
    
    const state = {
      validate_field: 'contact_email',
      request: { body: { }},
      validation_results: {},
      validation_rules: { contact_email: { type: 'email' }}
    };

    is_email(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('shold skip', () => {
    
    const state = {
      validate_field: 'contact_email',
      request: { body: { contact_email: null }},
      validation_results: {},
      validation_rules: { contact_email: { type: 'email' }}
    };

    is_email(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('shold fail', () => {
    
    const state = {
      validate_field: 'contact_email',
      request: { body: { contact_email: 'a@b.c' }},
      validation_results: {},
      validation_rules: { contact_email: { type: 'email' }}
    };

    is_email(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ contact_email: {type: 'email'} });
  });  

  it('shold fail', () => {
    
    const state = {
      validate_field: 'contact_email',
      request: { body: { contact_email: 1 }},
      validation_results: {},
      validation_rules: { contact_email: { type: 'email' }}
    };

    is_email(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ contact_email: {type: 'email'} });
  });

  it('shold fail', () => {
    
    const state = {
      validate_field: 'contact_email',
      request: { body: { contact_email: '' }},
      validation_results: {},
      validation_rules: { contact_email: { type: 'email' }}
    };

    is_email(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ contact_email: {type: 'email'} });
  }); 
});