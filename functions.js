
//variables
var num1 = "";
var num2 = "";
var resultado = "";
var semaforo = true;


function mostrar_boton(boton) {
    /**
     * el primer if comprueba que si hay un 0 ya en pantalla
     * no se repitan mas ceros
     */
    var texto = document.getElementById("pantalla").value;
    if (boton.value == "0") {
        
        if (texto[0] != "0") {
            document.getElementById("pantalla").value += boton.value;
        }
        else if (texto.indexOf("0")<0) {
            document.getElementById("pantalla").value += boton.value;         
        }else if (texto.includes(".")){
            document.getElementById("pantalla").value += boton.value; 
        }
    }else if (texto[0] == "0" && boton.value !="0" && boton.value != "." && texto.length == 1) {
        borrar_calcu();
        document.getElementById("pantalla").value += boton.value; 
        
    }else{
        document.getElementById("pantalla").value += boton.value;
    }
    
    decimal();

    if (semaforo) {
        num1 = document.getElementById("pantalla").value;
    }else{
        num2 = document.getElementById("pantalla").value;
    }
    
}

/*
Funcion para solo escribir una coma, una vez pulsada se desactiva la coma, hasta que pulses un
operador y un numero.
*/

function decimal() {
    var texto = document.getElementById("pantalla").value;
    var puntoDecimal = document.querySelector("#decimal");
    if (texto.includes(".")) {
        puntoDecimal.disabled = true;
    }else{
        document.getElementById("pantalla").value;
        puntoDecimal.disabled = false;
    }
}

//al momento de presionar un operador el semaforo cambia a false
//empieza a guardar los nuevos numeros presionados en la variable
//num2

function coger_operador(oper) {
    borrar_calcu();
    operador = oper.value
    semaforo = false;
}

// function noRepetirCeros() {
//     var pantalla = document.getElementById("pantalla").value;
//     if (pantalla == "0") {
//         if (pantalla.indexOf("0")<0) {
//             document.getElementById("pantalla").value+=0;
//         }
//     }
// }

function borrar_calcu() {
    document.getElementById("pantalla").value = "";
}

//esta funcion vacía las variables num1 y num2 a 0 y cambia el semaforo a true para 
//que al empezar a escribir de nuevo
//guarde los numeros de nuevo en la varibale num1
function limpiar_varibles() {
    document.getElementById("pantalla").value = "";
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
        // limpiar_varibles();
            break;
        case "-": 
        resultado = parseFloat(num1) - parseFloat(num2);
        document.getElementById("pantalla").value = resultado;
        num1= resultado.toString();
        // limpiar_varibles();
            break;
        case "x": 
        resultado = parseFloat(num1) * parseFloat(num2);
        document.getElementById("pantalla").value = resultado;
        num1= resultado.toString();
        // limpiar_varibles();
            break;
        case "/": 
        resultado = parseFloat(num1) / parseFloat(num2);
        document.getElementById("pantalla").value = resultado;
        num1= resultado.toString();
        // limpiar_varibles();
            break;
    
        default:
            document.getElementById("pantalla").value = "ERROR";
            break; 
    }
}