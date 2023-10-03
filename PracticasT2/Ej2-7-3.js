'use strict'; /*usar esto para obligar a declarar variables*/

let hermanos, cantidad, descuento, res;
hermanos = prompt("Indica tu número de hermanos/as");
cantidad = prompt("Indica la cantidad");
if (hermanos >= 3)
{
    descuento = (cantidad /100) *15;
    res = cantidad - descuento;
    alert('La cantidad total es ' + res);
}
else
{
    descuento = (cantidad /100) * 5;
    res = cantidad - descuento;
    alert('La cantidad total es ' + res);
}
