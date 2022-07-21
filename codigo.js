'use strict';
/*
tabla de multiplicar de un numero introducido.
*/
var number = parseInt(prompt("introduce un número",1));
while(isNaN(number)||number<0){
    number = parseInt(prompt("introduce un número",1));
}

document.write("Tabla pedida <br>")
document.write("<b>La Tabla del "+number+"</b><br>");
for(var i = 1; i <= 10; i++){
    document.write(`${number} x ${i} = ${(number*i)}<br>`);
}
document.write("<br>")
document.write("<br>")


// para ver mas tablas de forma automatica.
document.write("Todas las tablas <br>")
for(var number = 1; number <= 10; number++){
    document.write("<b>La Tabla del "+number+"</b><br>");
    for(var i = 1; i <= 10; i++){
        document.write(`${number} x ${i} = ${(number*i)}<br>`)
    }
    document.write("<br>")
}