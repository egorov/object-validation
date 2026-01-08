describe('in_range', () => {

  const in_range = require('../../src/v2_validators/in_range');

  it('shold pass', () => {
    
    const state = {
      validate_field: 'age',
      request: { body: { age: 10 }},
      validation_results: {},
      validation_rules: { age: { in_range: [ 1, 150 ] }}
    };

    in_range(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('shold fail', () => {
    
    const state = {
      validate_field: 'age',
      request: { body: { age: '10' }},
      validation_results: {},
      validation_rules: { age: { in_range: [ 1, 150 ] }}
    };

    in_range(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({age: { in_range: [ 1, 150 ] }});
  });

  it('shold pass', () => {
    
    const state = {
      validate_field: 'first_name',
      request: { body: { first_name: 'joe' }},
      validation_results: {},
      validation_rules: { first_name: { in_range: [ 'jack', 'james', 'joe' ] }}
    };

    in_range(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('shold fail', () => {
    
    const state = {
      validate_field: 'first_name',
      request: { body: { first_name: 'scott' }},
      validation_results: {},
      validation_rules: { first_name: { in_range: [ 'jack', 'james', 'joe' ] }}
    };

    in_range(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ first_name: { in_range: [ 'jack', 'james', 'joe' ] }});
  });  

  it('shold pass', () => {
    
    const state = {
      validate_field: 'age',
      request: { body: { age: '10' }},
      validation_results: {},
      validation_rules: { age: { in_range: { min: 1, max: 50 }}}
    };

    in_range(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('shold pass', () => {
    
    const state = {
      validate_field: 'age',
      request: { body: { age: 10 }},
      validation_results: {},
      validation_rules: { age: { in_range: { min: 1, max: 50 }}}
    };

    in_range(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  }); 

  it('shold fail', () => {
    
    const state = {
      validate_field: 'age',
      request: { body: { age: 10 }},
      validation_results: {},
      validation_rules: { age: { in_range: [ 11, 150 ] }}
    };

    in_range(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ age: { in_range: [ 11, 150 ] }});
  });

  it('shold fail', () => {
    
    const state = {
      validate_field: 'age',
      request: { body: { age: '10' }},
      validation_results: {},
      validation_rules: { age: { in_range: [ 11, 150 ] }}
    };

    in_range(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ age: { in_range: [ 11, 150 ] }});
  });  

  it('shold fail', () => {
    
    const state = {
      validate_field: 'age',
      request: { body: { age: 10 }},
      validation_results: {},
      validation_rules: { age: { in_range: { min: 11, max: 50 } }}
    };

    in_range(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ age: { in_range: { min: 11, max: 50 } }});
  }); 
});
