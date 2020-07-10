// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.


var num1 = prompt('inserisci una parola');
var num2 = prompt('inserisci una parola');

function varLength(x,y) {
    var lng1 = x.length;
    var lng2 = y.length;
    if (lng1 === lng2) {
        console.log('sono uguali');
    } else if (lng1 > lng2) {
        console.log('longest is ', x );
    } else {
        console.log('longest is ', y );
    };
}

console.log(varLength(num1,num2));