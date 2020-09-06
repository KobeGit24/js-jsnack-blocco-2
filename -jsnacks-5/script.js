var tot = [];

for (var i = 0; i < 6; i++) {
    var numUser = parseInt(prompt('inserisci un numero'));
    if (numUser%2) {
        tot.push(numUser); 
    }
}

console.log(tot); 