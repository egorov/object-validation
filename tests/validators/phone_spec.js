describe('phone', () => {

  const validate = require('../../src/validators/phone');

  it('should return null', () => {

    expect(validate('+7 912 922 81 57')).toBeNull();
    expect(validate('+1 202-456-1414')).toBeNull();
    expect(validate('+33 528.82.93.92')).toBeNull();
    expect(validate('+39 069 763-5756')).toBeNull();
    expect(validate('+86 10 6552 9988')).toBeNull();
    expect(validate('+386 1 655 9988')).toBeNull();
    expect(validate(void 0)).toBeNull();
    expect(validate(null)).toBeNull();
  });

  it('should return error', () => {
    
    const error = {
      type: 'phone'
    };

    expect(validate('joe@doe.local')).toEqual(error);
    expect(validate(1)).toEqual(error);
    expect(validate(true)).toEqual(error);
    expect(validate({})).toEqual(error);
    expect(validate([])).toEqual(error);
    expect(validate('1 800 WRONG NUMBER')).toEqual(error);
    expect(validate('8 3452 220346')).toEqual(error);
  });
});