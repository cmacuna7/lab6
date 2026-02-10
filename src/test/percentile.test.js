const { percentile} = require('../utils/percentile.js');

//•	percentile(0,[1,2,3]) → 1.00 ; percentile(100,[1,2,3]) → 3.00
//•	percentile(50,[1,2,3,4]) → 2.00 (nearest-rank)

describe('Pruebas para percentile', () => {
  test('Calcular percentil correctamente', () => {
    expect(percentile(0,[1,2,3])).toBe(1.00);
    expect(percentile(50,[1,2,3,4])).toBe(2.00);
  });

  test('Calcular percentil 100', () => {
    expect(percentile(100,[1,2,3])).toBe(3.00);
  });

  test('TypeError si p no es número', () => {
    expect(() => percentile('50', [1,2,3])).toThrow(TypeError);
  });

  test('TypeError si values no es arreglo', () => {
    expect(() => percentile(50, 'no array')).toThrow(TypeError);
  });

  test('RangeError si p < 0', () => {
    expect(() => percentile(-1, [1,2,3])).toThrow(RangeError);
  });

  test('RangeError si p > 100', () => {
    expect(() => percentile(101, [1,2,3])).toThrow(RangeError);
  });

  test('RangeError si values está vacío', () => {
    expect(() => percentile(50, [])).toThrow(RangeError);
  });

  test('TypeError si values contiene no-números', () => {
    expect(() => percentile(50, [1, 'dos', 3])).toThrow(TypeError);
  });
});