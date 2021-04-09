const validators = require('./validators');
const validate = require('./validate');

module.exports = function ValidateCommand() {

  this.state = {
    validators
  };
  this.use = use.bind(this);
  this.execute = execute.bind(this);
  
  function use(type, payload) {
    this.state[type] = payload;
  }

  function execute() {
    
    validate(this.state);

    return this.state.result;
  }
}