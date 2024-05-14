const { sum, multiply, divide } = require('./02-math');

describe('Test for math', () => {
  describe('test for sum', () => {
    test('adds 1 + 3 should be 4', () => {
      const rta = sum(1, 3);
      expect(rta).toBe(4);
    });
  });


  describe('Test for multiply', () => {
    test('should be 4', () => {
      const rta = multiply(1, 4);
      expect(rta).toBe(4);
    });
  });

  describe('Test for divide', () => {
    test('should be divide', () => {
      const rta = divide(8, 2);
      expect(rta).toBe(4);
    });
    test('should be divide for zero', () => {
      const rta = divide(6, 0);
      expect(rta).toBeNull();
    });
  });
});


