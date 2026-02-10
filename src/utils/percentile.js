//2.	percentile(p, values) — método nearest-rank
//Devuelve el percentil p de una lista de números usando el método de rango más cercano (sin interpolación).
//p en [0,100]; values: arreglo de números, longitud ≥ 1.
//Ordena ascendentemente; rank = ceil(p/100 × N) con indexación 1..N.
//Regla explícita para bordes: si p = 0 → devuelve mínimo; si p = 100 → máximo.
//Resultado con 2 decimales; validar tipos/rangos; lanzar errores apropiados.

function percentile(p, values) {
  if (typeof p !== "number" || !Array.isArray(values)) {
    throw new TypeError("p debe ser un número y values debe ser un arreglo.");
  }
    if (p < 0 || p > 100) {
    throw new RangeError("p debe estar entre 0 y 100.");
    }
    if (values.length < 1) {
    throw new RangeError("values debe contener al menos un número.");
    }
    for (const val of values) {
    if (typeof val !== "number") {
      throw new TypeError("Todos los elementos de values deben ser números.");
    }
  }
    const sorted = [...values].sort((a, b) => a - b);
    const N = sorted.length;
    const rank = Math.ceil((p / 100) * N);
    const result = sorted[Math.max(0, Math.min(rank - 1, N - 1))];
    return parseFloat(result.toFixed(2));
}

module.exports = { percentile };