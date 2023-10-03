'use strict'; /*usar esto para obligar a declarar variables*/

let mes;
mes = parseInt(prompt("Indica el número del mes"));

if (mes >= 1 && mes <= 12)
{
    switch (mes){
        case 1:
            alert ('Enero tiene 31 días')
            break;
        case 2:
            alert('Febrero tiene 28/29 días')
            break;
        case 3:
            alert('Marzo tiene 31 días')
            break;
        case 4:
            alert('Abril tiene 30 días')
            break;
        case 5:
            alert('Mayo tiene 31 días')
            break;
        case 6:
            alert('Junio tiene 30 días')
            break;
        case 7:
            alert('Julio tiene 31 días')
            break;
        case 8:
            alert('Agosto tiene 31 días')
            break;
        case 9:
            alert ('Septiembre tiene 30 días')
            break;
        case 10:
            alert ('Octubre tiene 31 días')
            break;
        case 11:
            alert ('Noviembre tiene 30 días')
            break;
        case 12:
            alert ('Diciembre tiene 31 días')
            break;
    }
}
else
{
    alert('El número introducido no corresponde a un mes')
}
