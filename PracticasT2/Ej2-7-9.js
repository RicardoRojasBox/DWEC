'use strict'; /*usar esto para obligar a declarar variables*/

let num, total;

total = 1; 
num = parseInt(prompt('Introduce un número'));

while (num > 1) 
{ 
    total *= num;
    num--; 
}

alert(total); 


