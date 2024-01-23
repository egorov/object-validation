'use strict';

module.exports = function make_validation_results_container(state) {

  if(state.error) return;

  try {

    if(typeof state.results === 'undefined')
      state.results = {};

    if(!Array.isArray(state.results[state.field]))
      state.results[state.field] = [];
  }
  catch(exception) {
    state.error = exception;
  }
}