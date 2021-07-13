function calcularDescuento() {
    const precio = document.getElementById('precio').value;
    let descuento = document.getElementById('descuento').value;

    const precioFinal = (precio * (100 - descuento)) / 100;

    const respuesta = document.getElementById('precioFinal');
    respuesta.textContent = `El precio con un descuento de ${descuento}% es de $${precioFinal}`

}

function utilizarCupon() {
    const parentElement = document.getElementById('form');

    const labelDescuento = document.getElementById('labelDescuento');
    labelDescuento.textContent = 'Elige un cupon';

    const inputDescuento = document.getElementById('descuento');
    inputDescuento.setAttribute('id', 'cupon');
    inputDescuento.setAttribute('type', 'text');

    const selectInput = document.createElement('select');


    parentElement.replaceChild(selectInput, inputDescuento);

    const cupones = [
        {
            cupon:'DESC%10',
            descuento: 10
        },
        {
            cupon:'DESC%20',
            descuento: 20
        },
        {
            cupon:'DESC%30',
            descuento: 30
        },
        {
            cupon:'DESC%40',
            descuento: 40
        },
        {
            cupon:'DESC%50',
            descuento: 50
        },
        {
            cupon:'DESC%60',
            descuento: 60
        }
    ];

    cupones.forEach(coupon => {
        let options = document.createElement('option');
        selectInput.append(options);
        options.textContent = `${coupon.cupon}`
    });


    const calculo = document.getElementById('calculoDescuento');
    calculo.removeAttribute('onclick');


    calculo.addEventListener('click', () => {

        const precio = document.getElementById('precio').value;
        const respuesta = document.getElementById('precioFinal');
        const cuponValue = selectInput.value;

        const isCuponValido = (coupon) => {
            return coupon.cupon === cuponValue;
        }

        const cuponValido = cupones.find(isCuponValido);

        if (!cuponValido){
            respuesta.textContent = `El cupon ${descuento} no es valido`;
        } else {
            descuento = cuponValido.descuento;
            const precioFinal = (precio * (100 - descuento)) / 100;
            respuesta.textContent = `El precio con el uso de  un cupon ${cuponValue} es de $${precioFinal}`
        };
    })
}
