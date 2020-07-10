// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.


var num1 = prompt('inserisci una parola');
var num2 = prompt('inserisci una parola');
var num3;

function varLength(x,y,z) {
    if (x.length > y.length) {
        var z = x;
    } else if (y.length > x.length) {
        var z = y;
    } else {
        var z = x + ' ' + y;
    }
    return z;
}

console.log(varLength(num1,num2,num3));