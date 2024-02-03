describe('v2_validate', () => {

  const v2_validate = require('../src/v2_validate');

  it('should pass', () => {

    const state = {
      request: { body: { created_at: new Date(), min_value: 1 }},
      validation_rules: { 
        created_at: { type: 'date' }, 
        min_value: { is_required: true }
      }
    };

    v2_validate(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toBeUndefined();
  });

  it('should fail', () => {

    const state = {
      request: { body: { created_at: new Date() }},
      validation_rules: { 
        created_at: { type: 'date' }, 
        min_value: { is_required: true }
      }
    };

    v2_validate(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ min_value: { is_required: true }});
  });
});