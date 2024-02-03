'use strict';

module.exports = function is_string_date(state) {

  if(state.error) return;

  if(!state.rules[state.field]) return;

  if(state.rules[state.field].type !== 'date') return;

  if(!state.request.body[state.field]) return;

  try {

    if(typeof state.request.body[state.field] !== 'string') return;

    if(!Number.isNaN(Date.parse(state.request.body[state.field]))) return;

    if(!state.results[state.field]) state.results[state.field] = {};
    
    state.results[state.field].type = 'date';
  }
  catch(exception) {
    state.error = exception;
  }
}