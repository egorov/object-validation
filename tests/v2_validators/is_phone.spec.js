describe('is_phone', () => {

  const is_phone = require('../../src/v2_validators/is_phone');

  it('should pass', () => {

    const state = {
      validate_field: 'contact_phone',
      request: { body: { contact_phone: '+7 912 922 32 43' }},
      validation_results: {},
      validation_rules: { contact_phone: { type: 'phone' }}
    };

    is_phone(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should pass', () => {

    const state = {
      validate_field: 'contact_phone',
      request: { body: { contact_phone: '+7 (3452) 512 812' }},
      validation_results: {},
      validation_rules: { contact_phone: { type: 'phone' }}
    };

    is_phone(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should pass', () => {

    const state = {
      validate_field: 'contact_phone',
      request: { body: { contact_phone: '+33 1 40 00 33 82' }},
      validation_results: {},
      validation_rules: { contact_phone: { type: 'phone' }}
    };

    is_phone(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should skip', () => {

    const state = {
      validate_field: 'contact_phone',
      request: { body: { contact_phone: undefined }},
      validation_results: {},
      validation_rules: { contact_phone: { type: 'phone' }}
    };

    is_phone(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should skip', () => {

    const state = {
      validate_field: 'contact_phone',
      request: { body: { contact_phone: null }},
      validation_results: {},
      validation_rules: { contact_phone: { type: 'phone' }}
    };

    is_phone(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should fail', () => {

    const state = {
      validate_field: 'contact_phone',
      request: { body: { contact_phone: 1 }},
      validation_results: {},
      validation_rules: { contact_phone: { type: 'phone' }}
    };

    is_phone(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ contact_phone: { type: 'phone' }});
  });
});