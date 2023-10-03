'use strict'; /*usar esto para obligar a declarar variables*/

let num, calculo, res;
    num = prompt("Introduce un número");
    res = (num % 2 == 0) ? "par" : "impar";
    if (res == "par")
    {
        alert ('El número ' + num + ' es par');
    }
    else
    {
        alert ('El número ' + num + ' es impar');
    }