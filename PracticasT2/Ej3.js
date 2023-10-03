'use strict'; /*usar esto para obligar a declarar variables*/

let x = Math.floor(Math.random() * 255);
let y = Math.floor(Math.random() * 255);
let z = Math.floor(Math.random() * 255);

let color = "rgb(" + x + ", " +  y + ", " + z + ")";
document.body.style.backgroundColor = color;