# Инструменты валидации моделей данных

Метод валидации `v2_validate` работает с использованием контейнера состояния, к которому должны быть присоединены запрос `request` с телом `body` и правила валидации `validation_rules`. В случае, если проверка содержимого тела запроса завершилась неуспешно, метод прикрепит к контейнеру состояния результаты проверки в `validation_results`.

```javascript  
const validate = require('object-validation').v2_validate;
const state = {
  request: {
    body: {
      first_name: 'Jack',
      last_name: 'Sparrow'
    }
  },
  validation_rules: {
    first_name: { is_required: true, type: 'string', min_length: 2 },
    last_name: { is_required: true, type: 'string', min_length: 2 },
    mobile_phone: { type: 'phone' },
    email: { is_required: true, type: 'email' }
  }
};

validate(state);

expect(state.validation_results).toEqual({ email: { is_required: true }});
```  

### Устаревший код  

Нижеозначенный код, а также метод `validate` из пакета следует считать устаревшим и в некоем обозримом будущем он будет удален из пакета. 

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

