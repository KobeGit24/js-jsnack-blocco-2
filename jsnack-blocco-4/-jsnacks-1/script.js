var array = [];
total = 0;
while (total < 50) {
    var user = parseInt(prompt('inserisci un numero'));
    total+=user;
    if (total < 50) {
        array.push(user);  
    }
}
console.log(array);


