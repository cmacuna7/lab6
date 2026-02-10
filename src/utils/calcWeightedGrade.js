//calcWeightedGrade(items)
//Calcula una nota final ponderada a partir de componentes con peso.

function calcWeightedGrade(items) {
  if (!Array.isArray(items)) {
    throw new TypeError("El input debe ser un arreglo de elementos.");
  }
  let totalWeight = 0;
  let weightedSum = 0;
  for (const item of items) {
    if (typeof item.score !== "number" || typeof item.weight !== "number") {
      throw new TypeError("Cada elemento debe tener score y weight numéricos.");
    } 
    if (item.score < 0 || item.score > 100) {
      throw new RangeError("Puntaje debe estar entre 0 y 100.");
    }
    if (item.weight < 0 || item.weight > 1) {
      throw new RangeError("Peso debe estar entre 0 y 1.");
    }
    totalWeight += item.weight;
    weightedSum += item.score * item.weight;
  }
  if (Math.abs(totalWeight - 1) > 0.001) {
    throw new RangeError("La suma total de los pesos debe ser 1 (±0.001).");
  }
  return parseFloat(weightedSum.toFixed(2));
}

module.exports = { calcWeightedGrade };