function calcularDescuento() {
  const precio = document.getElementById("precio").value;
  let descuento = document.getElementById("descuento").value;
  const respuesta = document.getElementById("precioFinal");

  if (precio === "" && descuento === "") {
    respuesta.style = "color: var(--equal-key-bg)";
    respuesta.textContent = `Por favor coloca un precio y valor de descuento para calcular`;
  } else if (precio === "") {
    respuesta.style = "color: var(--equal-key-bg)";
    respuesta.textContent = `Por favor coloca un precio para calcular el valor del descuento`;
  } else if (descuento === "") {
    respuesta.style = "color: var(--equal-key-bg)";
    respuesta.textContent = `Por favor coloca el valor del descuento para calcular el precio final`;
  } else {
    const precioFinal = (precio * (100 - descuento)) / 100;
    respuesta.style = "color: var(--screen-color)";
    respuesta.textContent = `El precio con un descuento de ${descuento}% es de $${precioFinal}`;
  }
}

function utilizarCupon() {
  const parentElement = document.getElementById("form");

  const cuponButton = document.getElementById("cuponButton");
  cuponButton.value = "Colocar Descuento";
  cuponButton.removeAttribute("onclick");

  const labelDescuento = document.getElementById("labelDescuento");
  labelDescuento.textContent = "Elige un cupon";

  const inputDescuento = document.getElementById("descuento");

  const selectInput = document.createElement("select");
  selectInput.setAttribute("id", "cupon");
  selectInput.setAttribute("type", "text");
  selectInput.style =
    "padding: 0.5em; background-color: var(--screen-bg); margin: 1em; border-radius: 1em; border: 0.1px solid var(--reset-key-bg); color: var(--second-number)";

  parentElement.replaceChild(selectInput, inputDescuento);

  const coupons = [
    {
      cupon: "DESC%10",
      descuento: 10,
    },
    {
      cupon: "DESC%20",
      descuento: 20,
    },
    {
      cupon: "DESC%30",
      descuento: 30,
    },
    {
      cupon: "DESC%40",
      descuento: 40,
    },
    {
      cupon: "DESC%50",
      descuento: 50,
    },
    {
      cupon: "DESC%60",
      descuento: 60,
    },
  ];

  coupons.forEach((coupon) => {
    let options = document.createElement("option");
    selectInput.append(options);
    options.textContent = `${coupon.cupon}`;
  });

  const calculo = document.getElementById("calculoDescuento");
  calculo.removeAttribute("onclick");

  // ==========================================================//

  cuponButton.addEventListener("click", () => {
    if (cuponButton.value === "Colocar Descuento") {
      cuponButton.value = "Utilizar Cupon";
      cuponButton.setAttribute("onclick", "utilizarCupon()");
      const parentElement = document.getElementById("form");

      const labelDescuento = document.getElementById("labelDescuento");
      labelDescuento.textContent = "Descuento a calcular";

      parentElement.replaceChild(inputDescuento, selectInput);

      const calculo = document.getElementById("calculoDescuento");
      calculo.setAttribute("onclick", "calcularDescuento()");
    }
  });

  //============================================================//

  calculo.addEventListener("click", () => {
    const precio = document.getElementById("precio").value;
    const respuesta = document.getElementById("precioFinal");
    const cuponValue = selectInput.value;

    const isCuponValido = (coupon) => {
      return coupon.cupon === cuponValue;
    };

    const cuponValido = coupons.find(isCuponValido);

    if (precio === "") {
      respuesta.style = "color: var(--equal-key-bg)";
      respuesta.textContent = `Por favor ingresa un precio para uso del cupon`;
    } else {
      descuento = cuponValido.descuento;
      const precioFinal = (precio * (100 - descuento)) / 100;
      respuesta.style = "color: var(--screen-color)";
      respuesta.textContent = `El precio con el uso de  un cupon ${cuponValue} es de $${precioFinal}`;
    }
  });
}
