const combineReducers = require('redux').combineReducers;
const createStore = require('redux').createStore;
const reducers = require('./reducers');

function makeStore() {

  const r = combineReducers(reducers);

  const s = createStore(r);

  return s;
}

module.exports = makeStore;