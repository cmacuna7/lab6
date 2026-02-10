const { calcWeightedGrade} = require('../utils/calcWeightedGrade.js');
//•	calcWeightedGrade([{score:80,weight:0.4},{score:90,weight:0.6}]) → 86.00

describe('Pruebas para calcWeightedGrade', () => {
  test('Calcular nota final ponderada correctamente', () => {
    expect(calcWeightedGrade([{score:80,weight:0.4},{score:90,weight:0.6}])).toBe(86.00);
  });

  test('TypeError si items no es arreglo', () => {
    expect(() => calcWeightedGrade('no array')).toThrow(TypeError);
  });

  test('TypeError si score no es número', () => {
    expect(() => calcWeightedGrade([{score:'80',weight:0.5},{score:90,weight:0.5}])).toThrow(TypeError);
  });

  test('TypeError si weight no es número', () => {
    expect(() => calcWeightedGrade([{score:80,weight:'0.5'},{score:90,weight:0.5}])).toThrow(TypeError);
  });

  test('RangeError si score < 0', () => {
    expect(() => calcWeightedGrade([{score:-10,weight:0.5},{score:90,weight:0.5}])).toThrow(RangeError);
  });

  test('RangeError si score > 100', () => {
    expect(() => calcWeightedGrade([{score:110,weight:0.5},{score:90,weight:0.5}])).toThrow(RangeError);
  });

  test('RangeError si weight < 0', () => {
    expect(() => calcWeightedGrade([{score:80,weight:-0.5},{score:90,weight:0.5}])).toThrow(RangeError);
  });

  test('RangeError si weight > 1', () => {
    expect(() => calcWeightedGrade([{score:80,weight:1.5},{score:90,weight:0.5}])).toThrow(RangeError);
  });

  test('RangeError si suma de pesos no es 1', () => {
    expect(() => calcWeightedGrade([{score:80,weight:0.3},{score:90,weight:0.3}])).toThrow(RangeError);
  });

  test('Calcular con un solo elemento peso 1', () => {
    expect(calcWeightedGrade([{score:95,weight:1}])).toBe(95.00);
  });
});
