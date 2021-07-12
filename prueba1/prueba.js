let name = "Carlos";
let lastName = "Acevedo";
let userName = "carlosbult";
let age = 25;
let email = "acevedo.bult@gmail.com";
let adult = true;
let moneySavings = 37;
let debts = 5;

console.log(`Nombre completo: ${name} ${lastName}`);
console.log('Dinero real: ', moneySavings - debts);

function exercims(nombre, apellido, usuario) {
    return `Mi nombre es ${nombre} ${apellido}, pero prefiero que me digas ${usuario}.`
}

console.log(exercims(name, lastName, userName));

//Primer condicional

const tipoDeSuscripcion = "Expert+";

function puedesVer(tipoDeSuscripcion) {
    if (tipoDeSuscripcion == "Free") {
        return "Solo puedes tomar los cursos gratis";
    } else if (tipoDeSuscripcion == "Basic") {
        return "Puedes tomar casi todos los cursos de Platzi durante un mes";
    } else if (tipoDeSuscripcion == "Expert") {
        return "Puedes tomar casi todos los cursos de Platzi durante un año";
    } else if (tipoDeSuscripcion == "Expert+") {
        return "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año";
    } else {
        return 'Esta suscripcion no es valida';
    }
}

console.log('Primer condicional: ', puedesVer(tipoDeSuscripcion));

//Segundo condicional con arrays

tipoDeSuscripcion2 = ['Free', 'Basic', 'Expert', 'Expert+'];

miSuscripcion = 'Basic';

mensajeTipo = [
    "Solo puedes tomar los cursos gratis",
    "Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Puedes tomar casi todos los cursos de Platzi durante un año",
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
]

function puedesVer2(tipoDeSuscripcion, suscripcion) {
    if (tipoDeSuscripcion.indexOf(suscripcion) > -1) {
        return mensajeTipo[tipoDeSuscripcion2.indexOf(miSuscripcion)];
    } else if (tipoDeSuscripcion.indexOf(suscripcion) === -1) {
        return 'Esta suscripcion no es valida'
    }
}

console.log('Segundo condicional: ',puedesVer2(tipoDeSuscripcion2, miSuscripcion));

// Ciclos

let i = 0;

while (i < 5) {
    console.log('El valor de i es: ' + i++);
}

let a = 10;

while (a > 2) {
    console.log('El valor de A es: ' + a--);
}

//Pregunta al usuario

let pregunta = 0;

do {
    pregunta = prompt('Cuanto es 2+2');
    pregunta *= 1;
} while (!(pregunta === 4)) {
    alert('Felicitaciones')
};

//Listas

//1 Crear funcion para recibir array e imprimir el primer elemento

let lista1 = [1,2,3,4,5];
let lista2 = ['uno', 'dos','tres','cuatro','cinco']

function recibe(parametro1) {
    return parametro1[0];
}

console.log(recibe(lista2));

//2 Crear funcion que reciba arrays e imprimir todos los elementos

let elementos = [5,7,8,5,3];

function printElements(array) {
    array.forEach(element => {
        console.log(element);
    });
}

printElements(elementos);

// Crear objeto

let element = {
    uno: 5124,
    dos: 48566,
    tres: 47894,
    cuatro: 4
}

function printObject(objeto) {
    for(object in objeto) {
        console.log(`${objeto[object]}`)
    }
}

printObject(element);