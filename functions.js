
function mostrar_boton(boton) {
    display = document.getElementById("pantalla").value;
    document.getElementById("pantalla").value = display + boton.value;
    noRepetirPunto(boton);
}

function borrar_calcu() {
    document.getElementById("pantalla").value = "0";
}

function noRepetirPunto(valor) {
    if (valor == '.') {
        var texto = document.getElementById("pantalla").value;
        if (texto.indexOf('.')<0) {
            document.getElementById("pantalla").value +=valor;
        }else{
            document.getElementById("pantalla").value += valor;
        }
    }
}