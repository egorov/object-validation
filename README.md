# Object fields values validation tools

## Validator function

Expect validation function signature like this:

```javascript
  function validate(value, rules) {
    
    /// rules - used to validate value

    if(isValid(value))
      return null;
    
    return {
      type: 'validation name'
    };
  }
```