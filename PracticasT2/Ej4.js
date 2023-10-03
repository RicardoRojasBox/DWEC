'use strict'; /*usar esto para obligar a declarar variables*/

let num;

num=prompt('Introduce un número');

if (isNaN(num))
{
    alert('El número introducido no es un número');
}
else
{
    alert('El número introducido es realmente un número');
}

