describe('url', () => {

  const validate = 
    require('../../src/validators/url');

  it('should return null', () => {

    expect(validate('http://localhost')).toBeNull();
    expect(validate('https://domain.local:8888/app')).toBeNull();
    expect(validate(void 0)).toBeNull();
    expect(validate(null)).toBeNull();
  });

  it('should return error', () => {

    const error = {
      type: 'url'
    };

    expect(validate(1)).toEqual(error);
    expect(validate('not url')).toEqual(error);
    expect(validate(true)).toEqual(error);
    expect(validate({})).toEqual(error);
    expect(validate([])).toEqual(error);
    expect(validate(1.55)).toEqual(error);
    expect(validate(() => 1)).toEqual(error);
  });
});