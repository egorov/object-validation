describe('personRules', () => { 

  const rules = require('./personRules');

  it('should supply firstName rules', () => {

    expect(rules.firstName.length).toEqual(4);
    expect(rules.firstName[0].type).toEqual('isString');
    expect(rules.firstName[1].type).toEqual('isRequired');
    expect(rules.firstName[2].type).toEqual('minLength');
    expect(rules.firstName[2].constraints).toEqual([2]);
    expect(rules.firstName[3].type).toEqual('maxLength');
    expect(rules.firstName[3].constraints).toEqual([50]);
  });

  it('should supply lastName rules', () => {

    expect(rules.lastName.length).toEqual(4);
    expect(rules.lastName[0].type).toEqual('isString');
    expect(rules.lastName[1].type).toEqual('isRequired');
    expect(rules.lastName[2].type).toEqual('minLength');
    expect(rules.lastName[2].constraints).toEqual([2]);
    expect(rules.lastName[3].type).toEqual('maxLength');
    expect(rules.lastName[3].constraints).toEqual([50]);
  });

  it('should supply gender rules', () => {

    expect(rules.gender.length).toEqual(1);
    expect(rules.gender[0].type).toEqual('inRange');
    expect(rules.gender[0].constraints.length).toEqual(2);
    expect(rules.gender[0].constraints[0]).toEqual('Male');
    expect(rules.gender[0].constraints[1]).toEqual('Female');
  });
});