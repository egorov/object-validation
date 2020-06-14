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
});