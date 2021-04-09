const validators = require('./validators');

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
    
    reset(this.state);

    if(!this.state.model)
      throw new TypeError('state.model must be object');
  
    if(!this.state.metadata)
      throw new TypeError('state.metadata must be object');
  
    for(const property in this.state.metadata) {
  
      this.state.fieldName = property;
  
      this.state.fieldValue = this.state.model[property] || null;
  
      validateField(this.state);
    }

    return this.state.result;
  }
}

function reset(state) {
  state.result = null;
  state.fieldName = null;
  state.fieldValue = null;
}

function validateField(state) {

  const property = state.fieldName;
  const rules = state.metadata[property];

  if(!rules) return;
  
  const validators = state.validators;
  const errors = [];

  for(const rule in rules) {

    const validate = (rule === 'type') ? validators.type : validators[rule];

    if(!validate)
      continue;
    
    const error = validate(state.fieldValue, rules[rule]);

    if(error)
      errors.push(error);
  }

  if(errors.length > 0) 
    state.result = Object.assign({}, state.result, { [property]: errors });
}