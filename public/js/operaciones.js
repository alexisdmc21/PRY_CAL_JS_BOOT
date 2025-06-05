function botonPresionado(valor) {
    let display = document.getElementById("display");
    if (display.value === "0") {
        display.value = '';
    }
    display.value += valor;
}

function limpiar() {
    display.value = '0';
}

function calcular() {
    try {
        let resultado = eval(display.value);

        if (resultado === Infinity) {
            display.value = 'Error! División por cero';
        } else {
            display.value = resultado;
        }
    } catch (error) {
        display.value = 'Error!';
    }
}
