// Jsnack
// Scrivi una funzione che fonda due array prendendo alternativamente gli elementi da uno e dall’altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

var array1 = [1,2,3];
var array2 = ['a','b','c'];
var sum = array1.length + array2.length;
var final = [];

i=0;
while (final.length < sum ) {
   final.push(array1[i],array2[i]);
   i++;
}

console.log(final);


