describe('is_boolean', () => {

  const is_boolean = require('../../src/v2_validators/is_boolean');

  it('should pass', () => {

    const state = {
      validate_field: 'is_smb',
      request: { body: { is_smb: true }},
      validation_results: {},
      validation_rules: { is_smb: { type: 'boolean' }}
    };

    is_boolean(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should pass', () => {

    const state = {
      validate_field: 'is_smb',
      request: { body: { is_smb: false }},
      validation_results: {},
      validation_rules: { is_smb: { type: 'boolean' }}
    };

    is_boolean(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should pass', () => {

    const state = {
      validate_field: 'is_smb',
      request: { body: { is_smb: new Boolean(true) }},
      validation_results: {},
      validation_rules: { is_smb: { type: 'boolean' }}
    };

    is_boolean(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should pass', () => {

    const state = {
      validate_field: 'is_smb',
      request: { body: { is_smb: new Boolean(0) }},
      validation_results: {},
      validation_rules: { is_smb: { type: 'boolean' }}
    };

    is_boolean(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should skip', () => {

    const state = {
      validate_field: 'is_smb',
      request: { body: { }},
      validation_results: {},
      validation_rules: { is_smb: { type: 'boolean' }}
    };

    is_boolean(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should skip', () => {

    const state = {
      validate_field: 'is_smb',
      request: { body: { is_smb: null }},
      validation_results: {},
      validation_rules: { is_smb: { type: 'boolean' }}
    };

    is_boolean(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('should fail', () => {

    const state = {
      validate_field: 'is_smb',
      request: { body: { is_smb: 'true' }},
      validation_results: {},
      validation_rules: { is_smb: { type: 'boolean' }}
    };

    is_boolean(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ is_smb: { type: 'boolean' }});
  });

  it('should fail', () => {

    const state = {
      validate_field: 'is_smb',
      request: { body: { is_smb: '' }},
      validation_results: {},
      validation_rules: { is_smb: { type: 'boolean' }}
    };

    is_boolean(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ is_smb: { type: 'boolean' }});
  });
});