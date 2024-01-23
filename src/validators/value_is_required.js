'use strict';

module.exports = function value_is_required(state) {

  if(state.error) return;

  try {
    const rule = state.rules[state.field];

    if(typeof rule === 'undefined' || rule === null) return;

    if(typeof rule.is_required === 'undefined') return;

    if(rule.is_required !== true) return;

    if(typeof state.request.body[state.field] !== 'undefined'
      && state.request.body[state.field] !== null) return;
    
    if(typeof state.results === 'undefined') state.results = {};

    state.results[state.field] = { is_required: true };
  }
  catch(exception) {
    state.error = exception;
  }
}