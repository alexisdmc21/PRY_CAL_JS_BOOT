let operador = '';
let primerNumero = '';

function mostrarEnCalculadora(valor) {
    let display = document.getElementById("display");
    display.value += valor;
}

function borrar() {
    document.getElementById("display").value = '';
    primerNumero = '';
    operador = '';
}


function sumar() {
    primerNumero = document.getElementById("display").value;
    operador = '+';
    document.getElementById("display").value = '';
}

function restar() {
    primerNumero = document.getElementById("display").value;
    operador = '-';
    document.getElementById("display").value = '';
}

function multiplicar() {
    primerNumero = document.getElementById("display").value;
    operador = '*';
    document.getElementById("display").value = '';
}

function dividir() {
    primerNumero = document.getElementById("display").value;
    operador = '/';
    document.getElementById("display").value = '';
}


function calcular() {
    let segundoNumero = document.getElementById("display").value;
    let resultado = 0;

    if (operador === '+') {
        resultado = parseFloat(primerNumero) + parseFloat(segundoNumero);
    } else if (operador === '-') {
        resultado = parseFloat(primerNumero) - parseFloat(segundoNumero);
    } else if (operador === '*') {
        resultado = parseFloat(primerNumero) * parseFloat(segundoNumero);
    } else if (operador === '/') {
        if (parseFloat(segundoNumero) === 0) {
            alert("No se puede dividir por cero.");
            document.getElementById("display").value = '';
            return;
        }
        resultado = parseFloat(primerNumero) / parseFloat(segundoNumero);
    }

    document.getElementById("display").value = resultado;
    operador = '';
    primerNumero = '';
}
