'use strict'; /*usar esto para obligar a declarar variables*/

let nombre, apellidos, edad, salario, total;

nombre = prompt('Introduce tu nombre');
apellidos = prompt('Introduce tus apellidos');
edad = parseInt(prompt('Introduce tu edad'));
salario = parseInt(prompt('Introduce tu salario'));

if (salario >= 1000 && salario <= 2000)
{
    if (edad > 45)
    {
        total = salario * 1.03;
    }
    else
    {
        total = salario * 1.1;
    }
}

else if (salario < 1000)
{
    if (edad < 30)
    {
        total = 1100;
    }

    else if (edad >= 30 && edad <= 45)
    {
        total = salario * 1.03;
    }
    else
    {
        total = salario * 1.15;
    }
}

else
{
    total = salario;
}

alert ('Nombre: ' + nombre + '\n' +  'Apellidos: ' + apellidos + '\n' + 'Salario :' + total);

