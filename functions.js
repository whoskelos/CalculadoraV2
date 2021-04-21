
//variables
var num1 = "";
var num2 = "";
var resultado = "";
var semaforo = true;

function mostrar_boton(boton) {
    
    document.getElementById("pantalla").value += boton.value;
    if (semaforo) {
        num1 = document.getElementById("pantalla").value;
        console.log(num1);
    }else{
        num2 = document.getElementById("pantalla").value;
        console.log(num2);
    }
    
}

//al momento de presionar un operador el semaforo cambia a false
//empieza a guardar los nuevos numeros presionados en la variable
//num2

function coger_operador(oper) {
    borrar_calcu();
    operador = oper.value
    semaforo = false;
    console.log("operador:",operador);
}

function borrar_calcu() {
    document.getElementById("pantalla").value = "";
}

function limpiar_varibles() {
    num1 = "0";
    num2 = "0";
    semaforo = true;
}

function mostrar_resultado() {
    switch (operador) {
        case "+": 
        resultado = parseFloat(num1) + parseFloat(num2);
        document.getElementById("pantalla").value = resultado;
        num1= resultado.toString();
        limpiar_varibles();
        console.log(resultado);
            break;
        case "-": 
        resultado = parseFloat(num1) - parseFloat(num2);
        document.getElementById("pantalla").value = resultado;
        num1= resultado.toString();
        limpiar_varibles();
        console.log(resultado);
            break;
        case "x": 
        resultado = parseFloat(num1) * parseFloat(num2);
        document.getElementById("pantalla").value = resultado;
        num1= resultado.toString();
        limpiar_varibles();
        console.log(resultado);
            break;
        case "/": 
        resultado = parseFloat(num1) / parseFloat(num2);
        document.getElementById("pantalla").value = resultado;
        num1= resultado.toString();
        limpiar_varibles();
        console.log(resultado);
            break;
    
        default:
            break;
    }
}

// function noRepetirPunto(valor) {
//     if (valor == '.') {
//         var texto = document.getElementById("pantalla").value;
//         if (texto.indexOf('.')<0) {
//             document.getElementById("pantalla").value +=valor;
//         }else{
//             document.getElementById("pantalla").value += valor;
//         }
//     }
// }