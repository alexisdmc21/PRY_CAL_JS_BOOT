/*FUNCION PARA MANEJAR LA ENTRADA DE LOS BOTONES*/
function botonPresionado(valor) {
    let display = document.getElementById("display"); /*VARIABLE QUE MANEJA LA PANTALLA*/

    /*CONDICIONAL PARA LIMPIAR LA PANTALLA CUANDO ESTE EN 0 Y DIGITE LOS VALORES PRESIONADOS*/
    if (display.value === "0") {
        display.value = '';
    }
    display.value += valor;
}

/*FUNCION PARA LIMPIAR LA PANTALLA MEDIANTE EL BOTON -C-*/
function limpiar() {
    let display = document.getElementById("display"); /*VARIABLE QUE MANEJA LA PANTALLA*/
    display.value = '0'; /*SE ASIGNA EL VALOR 0 A LA PANTALLA*/
}

/*FUNCION PARA CALCULAR EL RESULTADO CON MANEJO DE EXCEPCIONES*/
function calcular() {

    /*TRY QUE INTENTA HACER LA EVALUACION DE LA EXPRESION*/
    try {
        let resultado = eval(display.value);

        /*CONDICIONAL PARA MANEJAR LA DIVISION POR CERO*/
        if (resultado === Infinity) {
            display.value = 'Error! División por cero';
        } else {
            display.value = resultado;
        }
    } catch (error) {
        /*CATCH QUE MANEJA CUALQUIER ERROR EN LA EVALUACION*/
        display.value = 'Error!';
    }
}
