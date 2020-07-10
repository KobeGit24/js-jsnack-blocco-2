// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

function snack2(array,min,max) {
    var arrayNew = [];
    if (max>=array.length) {
        max = array.length-1;
    }

    for (var i = min; i <= max; i++) {
        if (array[i]) { 
            arrayNew.push(array[i]);
        }
    } 
    return arrayNew;
}

var array = [1,2,4,5,6];
var min = 1;
var max = 3;

console.log(snack2(array,min,max));



