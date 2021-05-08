describe('ValidateCommand', () => {

  const personTestResultSet = require('./PersonTestsResultSet');
  const metadata = require('./PersonMetadata');
  const ValidateCommand = require('../src/ValidateCommand');
  const command = new ValidateCommand();

  command.use('metadata', metadata);

  it('should iterate over set', () => {

    for(const item of personTestResultSet) {

      command.use('model', item.model);

      const result = command.execute();

      expect(result).toEqual(item.result);
    }
  });

  it('should throw if no data to validate', () => {

    const cmd = new ValidateCommand();
    cmd.use('metadata', metadata);

    expect(
      () => cmd.execute()
    ).toThrow(
      new TypeError('state.model must be object')
    );
  });

  it('should throw if no metadata to validate', () => {

    const cmd = new ValidateCommand();
    cmd.use('model', { key: 'value' });

    expect(
      () => cmd.execute()
    ).toThrow(
      new TypeError('state.metadata must be object')
    );
  });

  it('should pass', () => {

    const cmd = new ValidateCommand();
    cmd.use('metadata', { Price: { is_required: true }});
    cmd.use('model', { Price: 0 });

    expect(cmd.execute()).toBeNull();
  });
});