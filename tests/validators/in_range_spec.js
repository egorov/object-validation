describe('in range', () => {

  const validate = require('../../src/validators/in_range');
  const numbers = [
    -43,
    182.78
  ];
  const dates = [
    new Date(2000, 1, 1),
    new Date(2015, 7, 7)
  ];
  const wrongRange = [
    10,
    -10
  ];
  const noValues = [
    void 0,
    void 0
  ];

  it('should return null', () => {

    expect(validate(99.41, numbers)).toBeNull();
    expect(validate(-17, numbers)).toBeNull();
    expect(validate(new Date(2000, 2, 2), dates)).toBeNull();
  });

  it('should return error', () => {

    const error = {
      in_range: numbers
    };

    expect(validate(-43.01, numbers)).toEqual(error);
    expect(validate(182.79, numbers)).toEqual(error);
    expect(validate(void 0, numbers)).toEqual(error);

    error.in_range = dates;
    expect(validate(new Date(1999, 12, 31), dates)).toEqual(error);
    expect(validate(new Date(2015, 7, 8), dates)).toEqual(error);
    expect(validate(void 0, dates)).toEqual(error);

    error.in_range = noValues;
    expect(validate(void 0, noValues)).toEqual(error);

    error.in_range = wrongRange;
    expect(validate(10, wrongRange)).toEqual(error);
    expect(validate(0, wrongRange)).toEqual(error);
    expect(validate(-10, wrongRange)).toEqual(error);
  });

  it('should throw constraints should contain values', () => {

    const error = new Error('constraints should contain values');

    expect(() => validate(3, [])).toThrow(error);
  });

  it('should throw range should define min and max values', () => {

    const error = new Error('range should define min and max values');

    expect(() => validate(3, [-1])).toThrow(error);
    expect(() => validate(3, [void 0])).toThrow(error);    
  });
});