describe('is_url', () => {

  const is_url = require('../../src/v2_validators/is_url');

  it('shold pass', () => {
    
    const state = {
      validate_field: 'camera_url',
      request: { body: { camera_url: 'rtsp://1.1.1.1/stream' }},
      validation_results: {},
      validation_rules: { camera_url: { type: 'url' }}
    };

    is_url(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('shold skip', () => {
    
    const state = {
      validate_field: 'camera_url',
      request: { body: { }},
      validation_results: {},
      validation_rules: { camera_url: { type: 'url' }}
    };

    is_url(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('shold skip', () => {
    
    const state = {
      validate_field: 'camera_url',
      request: { body: { camera_url: null }},
      validation_results: {},
      validation_rules: { camera_url: { type: 'url' }}
    };

    is_url(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({});
  });

  it('shold fail', () => {
    
    const state = {
      validate_field: 'camera_url',
      request: { body: { camera_url: 'a@b.c' }},
      validation_results: {},
      validation_rules: { camera_url: { type: 'url' }}
    };

    is_url(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ camera_url: { type: 'url' } });
  });  

  it('shold fail', () => {
    
    const state = {
      validate_field: 'camera_url',
      request: { body: { camera_url: 1 }},
      validation_results: {},
      validation_rules: { camera_url: { type: 'url' }}
    };

    is_url(state);

    expect(state.error).toBeUndefined();
    expect(state.validation_results).toEqual({ camera_url: { type: 'url' } });
  }); 
});