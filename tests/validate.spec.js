describe('validate', () => {

  const personTestResultSet = require('./PersonTestsResultSet');
  const validationRules = require('./PersonMetadata');
  const validate = require('../src/validate');

  it('should iterate over set', () => {

    for(const item of personTestResultSet) {

      const result = validate(item.model, validationRules);

      expect(result).toEqual(item.result);
    }
  });

  it('should throw if no data to validate', () => {

    expect(
      () => validate(void 0, validationRules)
    ).toThrow(
      new TypeError('data must be object')
    );

    expect(
      () => validate(null, validationRules)
    ).toThrow(
      new TypeError('data must be object')
    );
  });

  it('should throw if no metadata to validate', () => {

    expect(
      () => validate({ key: 'value' }, void 0)
    ).toThrow(
      new TypeError('validationRules must be object')
    );

    expect(
      () => validate({ key: 'value' }, null)
    ).toThrow(
      new TypeError('validationRules must be object')
    );
  });

  it('should pass', () => {

    const model = {
      Price: 0,
      bytes: Buffer.from([ 1, 2 ])
    };
    const rules = {
      Price: {
        is_required: true,
        type: 'integer'
      },
      bytes: {
        instance_of: Buffer
      }
    };

    expect(validate(model, rules)).toBeNull();
  });

  it('should pass', () => {

    const rules = {
      Price: {
        is_required: false,
        type: 'integer'
      }
    };

    expect(validate({}, rules)).toBeNull();
  });

  it('should fail', () => {

    const model = {
      Price: 0,
      bytes: [ 1, 2 ]
    };
    const rules = {
      Price: {
        is_required: true,
        type: 'integer'
      },
      bytes: {
        instance_of: Buffer
      }
    };

    expect(validate(model, rules)).toEqual({
      bytes: [
        {
          instance_of: 'Buffer'
        }
      ]
    })
  });
});