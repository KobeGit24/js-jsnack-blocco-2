var x = prompt('inserisci un numero di quattro cifre');
console.log(x);
var sum = 0;
for (var i = 1; i < x.length; i++) {
  sum+= parseInt(x[i]);
}
console.log(sum);  