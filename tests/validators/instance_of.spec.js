describe('instance_of', () => {

  const validate = require('../../src/validators/instance_of');

  it('should pass', () => {

    expect(validate(Buffer.from([1,2]), Buffer)).toBeNull();
    expect(validate(new Date(), Date)).toBeNull();
    expect(validate([1,2,3], Array)).toBeNull();
    expect(validate(new String('x'), String)).toBeNull();
    expect(validate(new Boolean(true), Boolean)).toBeNull();
    expect(validate(new Number('123'), Number)).toBeNull();
  });

  it('should fail', () => {

    expect(validate(Buffer.from(['a', 'b']), Date)).toEqual({
      instance_of: 'Date'
    });
    expect(validate(new Date(), Buffer)).toEqual({
      instance_of: 'Buffer'
    });
    expect(validate(new Boolean('true'), Number)).toEqual({
      instance_of: 'Number'
    });
    expect(validate(null, Boolean)).toEqual({
      instance_of: 'Boolean'
    });
    expect(validate(void 0, Array)).toEqual({
      instance_of: 'Array'
    });
    expect(validate(true, Boolean)).toEqual({
      instance_of: 'Boolean'
    });
    expect(validate('value', String)).toEqual({
      instance_of: 'String'
    });
    expect(validate(128, Number)).toEqual({
      instance_of: 'Number'
    });
    expect(validate({}, Number)).toEqual({
      instance_of: 'Number'
    });
    expect(validate(Number.NaN, Number)).toEqual({
      instance_of: 'Number'
    });
  });
});