const lista1 = [220, 300, 110, 897, 156, 321, 741, 684, 163, 700, 960];

const lista2 = [65, 684, 47, 15, 36, 447, 100, 423, 71, 65];

//Promedio - Media Aritmetica

function calcularMediaAritmetic(lista) {
  const sumalista = lista.reduce(
    (valorAcumulado = 0, elementoActual) => valorAcumulado + elementoActual
  );

  const promedioLista1 = sumalista / lista.length;

  return promedioLista1;
}

// Mediana

const mitadLista = parseInt(lista1.length / 2);

function esPar(lista) {
  if (lista % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let mediana;

if (esPar(lista1.length)) {
  // Necesitamos 2 elementos para poder sacar el promedio de la mediana
  const elemento1 = lista1.sort()[mitadLista];
  const elemento2 = lista1.sort()[mitadLista - 1];
  mediana = calcularMediaAritmetic([elemento1, elemento2]);
} else {
  mediana = lista1.sort()[mitadLista];
  // Posicion mitad en lista1 es promedio
}

// Moda

const listaModa = [1, 2, 3, 4, 1, 5, 8, 7, 7, 5, 7, 5, 3, 7, 6];

function Moda(lista) {
  const countList = {};

  lista.map((number) =>
    countList[number] ? (countList[number] += 1) : (countList[number] = 1)
  );

  const arrayList = Object.entries(countList).sort(
    (valorAcumulado, nuevoValor) => valorAcumulado[1] - nuevoValor[1]
  );

  const moda = arrayList[arrayList.length - 1];
  return moda[0];
}

console.log(Moda(listaModa));
