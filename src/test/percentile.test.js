const { percentile} = require('../utils/percentile.js');

//•	percentile(0,[1,2,3]) → 1.00 ; percentile(100,[1,2,3]) → 3.00
//•	percentile(50,[1,2,3,4]) → 2.00 (nearest-rank)

describe('Pruebas para percentile', () => {
  test('Calcular percentil correctamente', () => {
    expect(percentile(0,[1,2,3])).toBe(1.00);
    expect(percentile(50,[1,2,3,4])).toBe(2.00);
  });
  
});