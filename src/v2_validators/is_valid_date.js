'use strict';

module.exports = function is_valid_date(state) {

  if(state.error) return;

  if(!state.rules[state.field]) return;

  if(state.rules[state.field].type !== 'date') return;

  if(!state.request.body[state.field]) return;

  try {

    if(!state.request.body[state.field] instanceof Date) return;

    if(state.request.body[state.field].toString() !== 'Invalid Date') return;

    if(!state.results[state.field]) state.results[state.field] = {};
    
    state.results[state.field].type = 'date';
  }
  catch(exception) {
    state.error = exception;
  }
}