# Инструменты валидации моделей данных

```javascript
const ValidateCommand = require('object-validation').ValidateCommand;
const metadata = {
  firstName: {
    type: 'string',
    min_length: 2,
    max_length: 100
  },
  lastName: {
    type: 'string',
    min_length: 2,
    max_length: 100
  },
  gender: {
    from_set: [
      'Male',
      'Female'
    ]
  },
  birthDate: {
    type: 'integer'
  },
  birthPlace: {
    type: 'string',
    max_length: 100
  }
};

const value = {
  firstName: 'Jack',
  lastName: 'Sparrow',
  gender: 'Male',
  birthDate: new Date(1960, 10, 10).valueOf(),
  birthPlace: 'Los Angeles'
};

const command = new ValidateCommand();

command.use('metadata', metadata);
command.use('model', value);

const result = command.execute();
```