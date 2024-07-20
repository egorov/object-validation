describe('v2_validate', () => {

  const v2_validate = require('../src/v2_validate');

  it('should pass', () => {

    const state = {
      request: { 
        body: { 
          contact_email: 'jack@sparrow.com',
          created_at: new Date(), 
          min_value: 1 
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

  it('should pass', () => {

    const state = {
      request: { 
        body: { 
          contact_email: 'jack@sparrow.com',
          created_at: "2024-02-17T10:00:00Z"
        },
      },
      validation_rules: { 
        contact_email: { type: 'email' },
        created_at: { is_required: true, type: 'date' }
      }
    };

    v2_validate(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toBeUndefined();
  });

  it('should pass', () => {

    const state = {
      request: { 
        body: { 
          category_id: 'XF000-XLS',
          supplier: 'IBM'
        },
      },
      validation_rules: {
        category_id: {
          is_required: true,
          type: 'string'
        },
        supplier: {
          is_required: true,
          type: 'string'
        },
        last_time_change: {
          type: 'date'
        }
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

  it('should fail', () => {

    const state = {
      request: { 
        body: { 
          contact_email: 'x@ibm.com',
          first_name: 'Evans'
        }
      },
      validation_rules: { 
        contact_phone: { is_required: true, type: 'phone' },
        contact_email: { type: 'email' },
        first_name: { type: 'string' }
      }
    };

    v2_validate(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ 
      contact_phone: { is_required: true }
    });
  });
});