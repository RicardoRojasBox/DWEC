'use strict'; /*usar esto para obligar a declarar variables*/

let num1, num2, operacion, res;
num1 = parseInt(prompt("Introduce el primer número"));
num2 = parseInt(prompt("Introduce un segundo número"));
operacion = prompt("Introduce la operación (+, -, /, *)");
switch (operacion){
    case '+':
        res = num1 + num2;
        alert(res);
        break;

    case '-':
        res = num1 - num2;
        alert(res);
        break;

    case '*':
        res = num1 * num2;
        alert(res);
        break;

    case '/':
        res = num1 / num2;
        alert (res);
        break;
}