// Codigo de calculo de Cuadrado

function calculoAreaCuadro() {
  const inputCuadrado = document.getElementById("inputCuadrado");
  const ladoCuadrado = inputCuadrado.value;
  const areaCuadrado = ladoCuadrado ** 2;

  const resultadoCuadrado = document.getElementById("resultadoArea");

  if (ladoCuadrado === "") {
    resultadoCuadrado.textContent = `Por favor ingresa una medida`;
  } else {
    resultadoCuadrado.textContent = `El area del cuadrado es de: ${areaCuadrado} cm2`;
  }
}

function calculoPerimetroCuadro() {
  const inputCuadrado = document.getElementById("inputCuadrado");
  const ladoCuadrado = inputCuadrado.value;
  const perimetroCuadrado = ladoCuadrado * 4;

  const resultadoCuadrado = document.getElementById("resultadoArea");

  if (ladoCuadrado === "") {
    resultadoCuadrado.textContent = `Por favor ingresa una medida`;
  } else {
    resultadoCuadrado.textContent = `El Perimetro del cuadrado es de: ${perimetroCuadrado} cm^2`;
  }
}

// Codigo de calculo de Triangulo

function calculoAreaTriangulo() {
  const ladoDerecho = document.getElementById("ladoDerecho");
  const valueDerecho = ladoDerecho.value;
  const base = document.getElementById("base");
  const valueBase = base.value;

  const alturaTriangulo = Math.sqrt(valueDerecho ** 2 - (valueBase / 2) ** 2);
  const areaTriangulo = (valueBase * alturaTriangulo) / 2;

  const resultadoTriangulo = document.getElementById("resultadoAreaTriangulo");
  resultadoTriangulo.textContent = `El Area del triangulo es de: ${areaTriangulo} cm2`;
}

function calculoPerimetroTriangulo() {
  const ladoDerecho = document.getElementById("ladoDerecho");
  const valueDerecho = ladoDerecho.value;
  const ladoIzquierdo = document.getElementById("ladoIzquierdo");
  const valueIzquierdo = ladoIzquierdo.value;
  const base = document.getElementById("base");
  const valueBase = base.value;

  const perimetroTriangulo = valueDerecho + valueIzquierdo + valueBase;

  const resultadoTriangulo = document.getElementById("resultadoAreaTriangulo");
  resultadoTriangulo.textContent = `El Perimetro del triangulo es de: ${perimetroTriangulo} cm`;
}

// Codigo de calculo de Circulo

function calculoAreaCirculo() {
  const inputCuadrado = document.getElementById("inputCirculo");
  const ladoCuadrado = inputCuadrado.value;
  const pi = Math.PI;
  const areaCirculo = ladoCuadrado ** 2 * pi;

  const resultadoCuadrado = document.getElementById("resultadoAreaCirculo");

  if (ladoCuadrado === "") {
    resultadoCuadrado.textContent = `Por favor ingresa una medida`;
  } else {
    resultadoCuadrado.textContent = `El Area del circulo es de: ${areaCirculo} cm2`;
  }
}

function calculoCircunferenciaCirculo() {
  const inputCirculo = document.getElementById("inputCirculo");
  const ladoCuadrado = inputCirculo.value;
  const pi = Math.PI;
  const diametro = ladoCuadrado * 2;

  const circunferencia = diametro * pi;

  const resultadoCuadrado = document.getElementById("resultadoAreaCirculo");

  if (ladoCuadrado === "") {
    resultadoCuadrado.textContent = `Por favor ingresa una medida`;
  } else {
    resultadoCuadrado.textContent = `La Circunferencia del circulo es de: ${circunferencia} cm`;
  }
}
