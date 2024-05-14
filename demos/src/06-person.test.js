const Person = require("./06-person");

describe('test for Person', () => {
  let person;
  // Arrange
  beforeEach(() => {
    person = new Person('Miguel', 45, 1.7);
  });


  test('shoul return down', () => {
    // Arrange
    person.weight = 45;
    // Act
    const imc = person.calcIMC();
    // Assert
    expect(imc).toBe('down');
  });

  test('shoul return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
