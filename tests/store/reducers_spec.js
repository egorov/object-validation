describe('reducers', () => {

  const reducers = require('../../src/store/reducers');

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
      expect(reduce({drink: 'espresso'}, {type: 'model'})).toBeNull(); 
      expect(reduce({drink: 'espresso'}, {type: 'metadata'})).toBeNull(); 
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
      expect(reduce({age: {type: 'integer'}}, {type: 'model'})).toBeNull();
      expect(reduce({age: {type: 'integer'}}, {type: 'metadata'})).toBeNull();
    });

    it('should ignore action', () => {

      expect(reduce(void 0, { type: 'x'})).toBeNull();
      expect(reduce(null, { type: 'x'})).toBeNull();
      expect(reduce({}, { type: 'x'})).toEqual({});
      expect(reduce({}, { type: 'x', payload: 'y'})).toEqual({});
    });
  });  

  describe('metadata', () => {

    const reduce = reducers.metadata;    

    it('should reduce action', () => {
  
      const action = {
        type: 'metadata',
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

  describe('model', () => {

    const reduce = reducers.model;    

    it('should reduce action', () => {
  
      const action = {
        type: 'model',
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

  describe('fieldName', () => {

    const reduce = reducers.fieldName;    

    it('should reduce action', () => {
  
      const action = {
        type: 'field name',
        payload: 'first_name'
      };

      expect(reduce(void 0, action)).toEqual(action.payload);
      expect(reduce('pack', action)).toEqual(action.payload);  
      expect(reduce({}, action)).toEqual(action.payload);  
      expect(reduce({drink: 'espresso'}, action)).toEqual(action.payload);  
      expect(reduce('jack', {type: 'model'})).toBeNull();
    });

    it('should ignore action', () => {

      expect(reduce(void 0, { type: 'x'})).toBeNull();
      expect(reduce(null, { type: 'x'})).toBeNull();
      expect(reduce({}, { type: 'x'})).toEqual({});
      expect(reduce({}, { type: 'x', payload: 'y'})).toEqual({});
    });
  });

  describe('fieldValue', () => {

    const reduce = reducers.fieldValue;    

    it('should reduce action', () => {
  
      const action = {
        type: 'field value',
        payload: 'jack'
      };

      expect(reduce(void 0, action)).toEqual(action.payload);
      expect(reduce('pack', action)).toEqual(action.payload);  
      expect(reduce({}, action)).toEqual(action.payload);  
      expect(reduce({drink: 'espresso'}, action)).toEqual(action.payload);  
      expect(reduce('jack', {type: 'model'})).toBeNull();
      expect(reduce('jack', {type: 'field name'})).toBeNull();
    });

    it('should ignore action', () => {

      expect(reduce(void 0, { type: 'x'})).toBeNull();
      expect(reduce(null, { type: 'x'})).toBeNull();
      expect(reduce({}, { type: 'x'})).toEqual({});
      expect(reduce({}, { type: 'x', payload: 'y'})).toEqual({});
    });
  });
});
