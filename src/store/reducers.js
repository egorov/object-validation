function fieldName(state = null, action) {
  switch(action.type) {
    case 'field name':
      return action.payload;
    case 'model':
      return null;
    default:
      return state;
  }
}

function fieldValue(state = null, action) {
  switch(action.type) {
    case 'field value': 
      return action.payload;
    case 'model':
      return null;
    case 'field name':
      return null;
    default:
      return state;
  }
}

function metadata(state = null, action) {
  switch(action.type) {
    case 'metadata':
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}

function model(state = null, action) {
  switch(action.type) {
    case 'model':
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
    case 'model': 
      return null;
    case 'metadata': 
      return null;
    default:
      return state;
  }
}

function rules(state = null, action) {
  switch(action.type) {
    case 'rules':
      return Object.assign({}, action.payload);
    case 'model':
      return null;
    case 'metadata': 
      return null;
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

module.exports = {
  fieldName,
  fieldValue,
  metadata,
  model,
  result,
  rules,
  validators
};