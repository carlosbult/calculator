//Variables
let inputCuadrado = document.getElementById("inputCuadrado");
let resultadoCuadrado = document.getElementById("resultadoArea");
let ladoDerecho = document.getElementById("ladoDerecho");
let ladoIzquierdo = document.getElementById("ladoIzquierdo");
let base = document.getElementById("base");
let resultadoTriangulo = document.getElementById("resultadoAreaTriangulo");

let inputCirculo = document.getElementById("inputCirculo");
let resultadoCirculo = document.getElementById("resultadoAreaCirculo");

// Codigo de calculo de Cuadrado
function calculoAreaCuadro() {
  let ladoCuadrado = inputCuadrado.value;
  let areaCuadrado = ladoCuadrado ** 2;
  if (ladoCuadrado === "") {
    resultadoCuadrado.textContent = `Por favor ingresa una medida`;
  } else {
    resultadoCuadrado.textContent = `El area del cuadrado es de: ${areaCuadrado} cm2`;
  }
}

function calculoPerimetroCuadro() {
  const ladoCuadrado = inputCuadrado.value;
  const perimetroCuadrado = ladoCuadrado * 4;

  if (ladoCuadrado === "") {
    resultadoCuadrado.textContent = `Por favor ingresa una medida`;
  } else {
    resultadoCuadrado.textContent = `El Perimetro del cuadrado es de: ${perimetroCuadrado} cm^2`;
  }
}

// Codigo de calculo de Triangulo
function calculoAreaTriangulo() {
  const valueDerecho = ladoDerecho.value;
  const valueBase = base.value;

  const alturaTriangulo = Math.sqrt(valueDerecho ** 2 - (valueBase / 2) ** 2);
  const areaTriangulo = (valueBase * alturaTriangulo) / 2;

  if (
    (valueDerecho === "" && valueBase === "") ||
    valueDerecho === "" ||
    valueBase === ""
  ) {
    resultadoTriangulo.textContent = `Por favor ingresa todas las medidas`;
  } else {
    resultadoTriangulo.textContent = `El Area del triangulo es de: ${areaTriangulo} cm2`;
  }
}

function calculoPerimetroTriangulo() {
  const valueDerecho = ladoDerecho.value;
  const valueIzquierdo = ladoIzquierdo.value;
  const valueBase = base.value;

  const perimetroTriangulo = valueDerecho + valueIzquierdo + valueBase;

  if (
    (valueDerecho === "" && valueIzquierdo === "" && valueBase === "") ||
    valueDerecho === "" ||
    valueIzquierdo === "" ||
    valueBase === ""
  ) {
    resultadoTriangulo.textContent = `Por favor ingresa todas las medidas`;
  } else {
    resultadoTriangulo.textContent = `El Perimetro del triangulo es de: ${perimetroTriangulo} cm`;
  }
}

// Codigo de calculo de Circulo
function calculoAreaCirculo() {
  const circulo = inputCirculo.value;
  const pi = Math.PI;
  const areaCirculo = circulo ** 2 * pi;

  if (circulo === "") {
    resultadoCirculo.textContent = `Por favor ingresa una medida`;
  } else {
    resultadoCirculo.textContent = `El Area del circulo es de: ${areaCirculo} cm2`;
  }
}

function calculoCircunferenciaCirculo() {
  const circulo = inputCirculo.value;
  const pi = Math.PI;
  const diametro = circulo * 2;

  const circunferencia = diametro * pi;

  if (circulo === "") {
    resultadoCirculo.textContent = `Por favor ingresa una medida`;
  } else {
    resultadoCirculo.textContent = `La Circunferencia del circulo es de: ${circunferencia} cm`;
  }
}
