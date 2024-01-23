'use strict';

module.exports = function date_is_undefined(state) {

    if(state.error) return;

    try {
      const error_result = { type: 'date' };
      const rule = state.rules[state.field];

      if(typeof rule === 'undefined' || rule === null) return;

      if(rule.type !== 'date') return;

      if(rule.is_required === false) {
        
        if(typeof state.request.body[state.field] === 'undefined') return;

        if(state.request.body[state.field] === null) return;
      }

      if(typeof state.request.body[state.field] === 'number') return;

      if(typeof state.request.body[state.field] !== 'undefined') return;

      state.make_validation_results_container(state);

      state.results[state.field].push(error_result);
    }
    catch(exception) {
      state.error = exception;
    }
}