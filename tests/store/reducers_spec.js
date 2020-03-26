describe('reducers', () => {

  const reducers = require('../../src/store/reducers');

  describe('value', () => {

    const reduce = reducers.value;    

    it('should reduce action', () => {

      const action = {
        type: 'value',
        payload: {
          cake: 'vanilla'
        }
      };
  
      expect(reduce(void 0, action)).toEqual(action.payload);
      expect(reduce(void 0, action)).not.toBe(action.payload);
      expect(reduce({}, action)).toEqual(action.payload);  
      expect(reduce({drink: 'espresso'}, action)).toEqual(action.payload);  
    });

    it('should ignore action', () => {

      expect(reduce(void 0, { type: 'x'})).toBeNull();
      expect(reduce(null, { type: 'x'})).toBeNull();
      expect(reduce({}, { type: 'x'})).toEqual({});
      expect(reduce({}, { type: 'x', payload: 'y'})).toEqual({});
    });
  });

  describe('rules', () => {

    const reduce = reducers.rules;    

    it('should reduce action', () => {
  
      const action = {
        type: 'rules',
        payload: {
          cake: 'vanilla'
        }
      };

      expect(reduce(void 0, action)).toEqual(action.payload);
      expect(reduce(void 0, action)).not.toBe(action.payload);
      expect(reduce({}, action)).toEqual(action.payload);  
      expect(reduce({drink: 'espresso'}, action)).toEqual(action.payload);  
    });

    it('should ignore action', () => {

      expect(reduce(void 0, { type: 'x'})).toBeNull();
      expect(reduce(null, { type: 'x'})).toBeNull();
      expect(reduce({}, { type: 'x'})).toEqual({});
      expect(reduce({}, { type: 'x', payload: 'y'})).toEqual({});
    });
  });

  describe('validators', () => {

    const reduce = reducers.validators;    

    it('should reduce action', () => {

      const action = {
        type: 'validators',
        payload: {
          cake: 'vanilla'
        }
      };
  
      expect(reduce(void 0, action)).toEqual(action.payload);
      expect(reduce(void 0, action)).not.toBe(action.payload);
      expect(reduce({}, action)).toEqual(action.payload);  
      expect(reduce({drink: 'espresso'}, action)).toEqual(action.payload);  
    });

    it('should ignore action', () => {

      expect(reduce(void 0, { type: 'x'})).toBeNull();
      expect(reduce(null, { type: 'x'})).toBeNull();
      expect(reduce({}, { type: 'x'})).toEqual({});
      expect(reduce({}, { type: 'x', payload: 'y'})).toEqual({});
    });
  });  

  describe('validation result', () => {

    const reduce = reducers.result;    

    it('should reduce action', () => {

      const action = {
        type: 'validation result',
        payload: {
          first_name: {
            type: 'string'
          }
        }
      };
  
      expect(reduce(void 0, action)).toEqual(action.payload);
      expect(reduce(void 0, action)).not.toBe(action.payload);
      expect(reduce({}, action)).toEqual(action.payload);  

      const state = {
        age: {
          type: 'integer'
        },
        first_name: {
          type: 'string'
        }
      }
      expect(reduce({age: {type: 'integer'}}, action)).toEqual(state);  
    });

    it('should ignore action', () => {

      expect(reduce(void 0, { type: 'x'})).toBeNull();
      expect(reduce(null, { type: 'x'})).toBeNull();
      expect(reduce({}, { type: 'x'})).toEqual({});
      expect(reduce({}, { type: 'x', payload: 'y'})).toEqual({});
    });
  });  

  describe('clear validation result', () => {

    const reduce = reducers.result;    

    it('should reduce action', () => {

      const action = {
        type: 'clear validation result'
      };
  
      expect(reduce(void 0, action)).toBeNull();
      expect(reduce(void 0, action)).toBeNull();
      expect(reduce({}, action)).toBeNull();
      expect(reduce({age: {type: 'integer'}}, action)).toBeNull();
    });

    it('should ignore action', () => {

      expect(reduce(void 0, { type: 'x'})).toBeNull();
      expect(reduce(null, { type: 'x'})).toBeNull();
      expect(reduce({}, { type: 'x'})).toEqual({});
      expect(reduce({}, { type: 'x', payload: 'y'})).toEqual({});
    });
  });  
});