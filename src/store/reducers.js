function value(state = null, action) {
  switch(action.type) {
    case 'value':
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}

function rules(state = null, action) {
  switch(action.type) {
    case 'rules':
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}

function validators(state = null, action) {
  switch(action.type) {
    case 'validators':
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}

function result(state = null, action) {
  switch(action.type) {
    case 'validation result': {
      if(typeof action.payload === 'undefined')
        return state;

      if(action.payload === null)
        return state;
      
      return Object.assign({}, state, action.payload);
    }
    case 'clear validation result': 
      return null;
    default:
      return state;
  }
}

module.exports = {
  result,
  rules,
  value,
  validators
};