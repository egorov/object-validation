const makeStore = require('./store/makeStore');
const validators = require('./validators');
const validate = require('./validate');

function ValidateCommand() {

  this.store = makeStore();
  this.store.dispatch({type: 'validators', payload: validators});
  this.use = use.bind(this);
  this.execute = execute.bind(this);
  
  function use(type, payload) {
    this.store.dispatch({type, payload});
  }

  function execute() {
    validate(this.store);

    const result = this.store.getState().result;

    return result;
  }
}

module.exports = ValidateCommand;