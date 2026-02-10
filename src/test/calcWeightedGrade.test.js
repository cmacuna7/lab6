const { calcWeightedGrade} = require('../utils/calcWeightedGrade.js');
//•	calcWeightedGrade([{score:80,weight:0.4},{score:90,weight:0.6}]) → 86.00

describe('Pruebas para calcWeightedGrade', () => {
  test('Calcular nota final ponderada correctamente', () => {
    expect(calcWeightedGrade([{score:80,weight:0.4},{score:90,weight:0.6}])).toBe(86.00);
  });

});
