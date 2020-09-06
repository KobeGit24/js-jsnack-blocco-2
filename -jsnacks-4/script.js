var userName = prompt("inserisci la tua mail:");

var surname = ['Rossi', 'Bianco', 'Esposito', 'Russo', 'Verde'];

var nonEsiste = true;

for (var i = 0; i < surname.length; i++) {
    if (surname[i] == userName ) {
        nonEsiste = false;
        console.log("WELCOME");
    } 
}
 
if(nonEsiste) {
    console.log("il suo nome non e' sulla lista");
}

// METODO ALTERNATIVO

// if (surname.indexOf(userName) === -1) {
//    console.log("il suo nome non e' sulla lista");
// } else {
//    console.log("WELCOME");
// }