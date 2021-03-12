const validators = require('./validators');
const validate = require('./validate');

module.exports = function ValidateCommand() {

  this.state = {
    validators
  };
  this.use = use.bind(this);
  this.execute = execute.bind(this);
  
  function use(type, payload) {
    this.state.fieldName = null;
    this.state.fieldValue = null;
    this.state.result = null;
    this.state.rules = null;
    this.state[type] = payload;
  }

  function execute() {
    
    validate(this.state);

    return this.state.result;
  }
}