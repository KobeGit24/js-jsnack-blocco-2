for (var i = 0; i < 10; i++) {
    console.log(2**i);  
}

var numero = 1;
var exp = 1;
while (numero < 1000) {
    console.log(numero);
    numero = 2**exp;
    exp++;
}