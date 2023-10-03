'use strict'; /*usar esto para obligar a declarar variables*/

let num1, num2;

num1 = parseInt(prompt('Introduce un número'));

while (num2 !== num1)
{
    num2 = parseInt(prompt('Adivina cual es...'));
    if (num2 > num1)
    {
        alert('Otro menor...');
    }

    else if (num2 < num1)
    {
        alert('Otro mayor...')
    }
}

alert('Enhorabuena! Has acertado!');