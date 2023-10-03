'use strict'; /*usar esto para obligar a declarar variables*/

let num, txt;
txt = "Los números pares entre 25 y 1 son: ";
for (num = 25; num >= 2; num--)
{   
    if (num % 2 == 0)
    {
        txt += num + " ";
    }
}

alert(txt);