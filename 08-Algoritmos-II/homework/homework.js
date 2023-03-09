'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;
  let n = array.length;
  let pivot = array[0];
  let right = [];
  let left = [];
  for (let i = 1; i < n; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora

  if (array.length <= 1) return array;

  // Dividir el array en mitades
  const middleIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex);

  // Ordenar recursivamente cada mitad
  const leftSorted = mergeSort(leftArray);
  const rightSorted = mergeSort(rightArray);

  // Combinar las mitades en orden ascendente
  const mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < leftSorted.length && rightIndex < rightSorted.length) {
    if (leftSorted[leftIndex] < rightSorted[rightIndex]) {
      mergedArray.push(leftSorted[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(rightSorted[rightIndex]);
      rightIndex++;
    }
  }
  return mergedArray.concat(leftSorted.slice(leftIndex)).concat(rightSorted.slice(rightIndex));

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
