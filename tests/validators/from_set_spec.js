describe('from_set', () => {

  const validate = require('../../src/validators/from_set');
  const strings = [
    'Male',
    'Female'
  ];
  const integers = [
    55,
    99,
    182
  ];
  const dates = [
    new Date(1999, 1, 1),
    new Date(2000, 2, 2),
    new Date(2005, 5, 5)
  ];
  const milliseconds = [
    new Date(1999, 1, 1).valueOf(),
    new Date(2000, 2, 2).valueOf(),
    new Date(2005, 5, 5).valueOf()
  ];
  const numbers = [
    1.35,
    0.098,
    199.99
  ];
  const mix = [
    81,
    'Good',
    45.55,
    true,
    null,
    {}
  ];

  it('should return null', () => {

    expect(validate('Male', strings)).toBeNull();
    expect(validate(99, integers)).toBeNull();
    expect(validate(new Date(2000, 2, 2).valueOf(), milliseconds)).toBeNull();
    expect(validate(0.098, numbers)).toBeNull();
    expect(validate(81, mix)).toBeNull();
    expect(validate('Good', mix)).toBeNull();
    expect(validate(45.55, mix)).toBeNull();
    expect(validate(true, mix)).toBeNull();
    expect(validate(null, mix)).toBeNull();
    expect(validate(void 0, [void 0])).toBeNull();
  });

  it('should return error', () => {

    const error = {
      from_set: strings
    };

    expect(validate('Unknown', strings)).toEqual(error);

    error.from_set = integers;
    expect(validate(33, integers)).toEqual(error);

    error.from_set = dates;
    expect(validate(new Date(2000, 2, 2), dates)).toEqual(error);

    error.from_set = numbers;
    expect(validate(55.95, numbers)).toEqual(error);

    error.from_set = mix;
    expect(validate({}, mix)).toEqual(error);

    expect(validate(void 0, mix)).toEqual(error);
  });
});