var sum=0;
for (var i = 0; i < 10; i++) {
    var numero = parseInt(prompt('inserisci un numero'));
    sum += numero;
}
console.log('la somma:' + sum);
console.log('la media:' + sum/10);