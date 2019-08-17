describe('Person', () => {

  it('should supply values', () => {

    const person = require('./Person');

    expect(person.firstName).toEqual('Jack');
    expect(person.lastName).toEqual('Sparrow');
    expect(person.gender).toEqual('Male');
    expect(person.birthDate).toEqual(new Date(1960, 10, 10));
    expect(person.birthPlace).toEqual('Los Angeles');
  });
});