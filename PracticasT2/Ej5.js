'use strict'; /*usar esto para obligar a declarar variables*/

let num;

num = prompt('Introduce un número');

if (isNaN(num))
{
    alert('No has introducido un número');
}

else
{
    alert('Has introducido un número');
}