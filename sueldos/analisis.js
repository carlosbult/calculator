//Helpers
function esPar(numero) {
  return numero % 2 === 0;
}

function calcularMediaAritmetic(lista) {
  const sumalista = lista.reduce(
    (valorAcumulado = 0, elementoActual) => valorAcumulado + elementoActual
  );

  const promedioLista1 = sumalista / lista.length;
  return promedioLista1;
}

//Calculo de salarios
const salary = venezuela.map((person) => person.salary);

const salarySort = salary.sort((salaryA, salaryB) => salaryA - salaryB);

//Mediana
function medianaSalary(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personHalfOne = lista[mitad - 1];
    const personHalfTWo = lista[mitad];
    const mediana = calcularMediaAritmetic([personHalfOne, personHalfTWo]);
    return mediana;
  } else {
    const personHalf = lista[mitad];
    return personHalf;
  }
}

const medianaGeneral = medianaSalary(salarySort);

//Mediana Top 10%


const spliceStart = (salarySort.length * (100 - 10)) / 100;
const spliceCount = salarySort.length - spliceStart;

const salarios10 = salarySort.splice(spliceStart, spliceCount);

const medianaTop10 = medianaSalary(salarios10);

console.log({
    medianaGeneral,
    medianaTop10,
});
