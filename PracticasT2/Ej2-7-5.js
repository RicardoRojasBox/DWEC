'use strict'; /*usar esto para obligar a declarar variables*/

let num, parimpar, tres, cinco, res;
num = prompt('Introduce un número');
parimpar = (num % 2 == 0) ? "par" : "impar";
res = "El número " + num + " es " + parimpar;
tres = ", es múltiplo de 3";
cinco = ", es múltiplo de 5";
if (num % 3 == 0)
{
    res += tres;
}
if (num % 5 == 0)
{
    res += cinco;
}

alert(res);