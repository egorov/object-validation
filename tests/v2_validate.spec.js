describe('v2_validate', () => {

  const v2_validate = require('../src/v2_validate');

  it('should pass', () => {

    const state = {
      request: { 
        body: { 
          contact_email: 'jack@sparrow.com',
          created_at: new Date(), min_value: 1 
        },
      },
      validation_rules: { 
        contact_email: { type: 'email' },
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
      request: { 
        body: { 
          contact: '+7 912 922 55 66',
          created_at: new Date() 
        }
      },
      validation_rules: { 
        contact: { type: 'email' },
        created_at: { type: 'date' }, 
        min_value: { is_required: true }
      }
    };

    v2_validate(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ 
      contact: { type: 'email' },
      min_value: { is_required: true }
    });
  });
});