describe('email', () => {

  const validate = require('../../src/validators/email');

  it('should return null', () => {

    expect(validate('joe@doe.local')).toBeNull();
    expect(validate("&'*+-./=?^_{}~@mail.local")).toBeNull();
    expect(validate('j`o`e@doe.local')).toBeNull();
    expect(validate('joe`@doe.local')).toBeNull();
    expect(validate('joe@doe.local')).toBeNull();
  });

  it('should return error', () => {

    const error = {
      type: 'email'
    };

    expect(validate(null)).toEqual(error);
    expect(validate(void 0)).toEqual(error);
    expect(validate(1)).toEqual(error);
    expect(validate(true)).toEqual(error);
    expect(validate({})).toEqual(error);
    expect(validate([])).toEqual(error);
    expect(validate('not email')).toEqual(error);
    expect(validate('a@b.c')).toEqual(error);
  });
});