'use strict'; /*usar esto para obligar a declarar variables*/

let num, total;

total = 0;

while (num !== 0)
{
    num = parseInt(prompt("Introduce un número"));
    total += num;
}
    alert(total);