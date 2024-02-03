'use strict';

module.exports = function is_number_date(state) {

  if(state.error) return;

  if(!state.rules[state.field]) return;

  if(state.rules[state.field].type !== 'date') return;

  if(!state.request.body[state.field]) return;

  try {

    if(!Number.isInteger(state.request.body[state.field])) return;

    if(state.request.body[state.field] >= 0) return;

    if(new Date(state.request.body[state.field]).toString() !== 'Invalid Date') return;

    if(!state.results[state.field]) state.results[state.field] = {};
    
    state.results[state.field].type = 'date';
  }
  catch(exception) {
    state.error = exception;
  }
}