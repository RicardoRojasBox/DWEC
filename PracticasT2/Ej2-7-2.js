'use strict'; /*usar esto para obligar a declarar variables*/

let localidad, edad;
localidad = prompt("Indica tu localidad");
edad = prompt("Indica tu edad");
if (localidad === "Alicante" && edad >= 18 && edad <= 35)
{
    alert ('Puede acceder al carnet de empresarios emprendedores')
}
else
{
    alert ('No puede acceder al carnet de empresarios emprendedores')
}