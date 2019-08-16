# Object fields values validation tools

## Validator function

Expect validation function signature like this:

```javascript
  function validate(value, constraints) {
    
    /// constraints - is array of variables required to validate value

    if(isValid(value))
      return null;
    
    return {
      type: 'validation name'
    };
  }
```