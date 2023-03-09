'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  const arr =[1];               
  let div = 2                     
  while (num >1) {
    if(num % div === 0){ arr.push(div)
    num = num/div
  }else { div++
  }
  }
  return arr
  }


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  var n = array.length;
    for (var i = 0; i < n - 1; i++) {
      for (var j = 0; j < n - 1; j++) {
        if (array[j] > array[j+1]) {
          var temp = array[j];
          array[j] = array[j+1];
          array[j+1] = temp;
        }
      }
    }
    return array;
  }



function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let j = 0; j < array.length; j++) {
    for (let i = 1; i < array.length; i++) {
      if (array[i] < array[i - 1]) {
        let aux = array[i];
        array[i] = array[i - 1];
        array[i - 1] = aux;

      }
    }
  }return array

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
