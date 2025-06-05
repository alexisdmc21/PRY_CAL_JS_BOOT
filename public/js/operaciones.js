function botonPresionado(valor) {
    let display = document.getElementById("display");
    display.value += valor;
}

function limpiar() {
    display.value = '';
}

function calcular() {
    try {
        let resultado = eval(display.value);

        if (resultado === Infinity) {
            display.value = 'Error!';
        } else {
            display.value = resultado;
        }
    } catch (error) {
        display.value = 'Error!';
    }
}
