var nomi = ['alex', 'john', 'peter', 'james'];
var cognomi = ['red','blue','yellow','white'];
var gatsby = [];

for (var i = 0; i < nomi.length; i++) {
    var random = getRandomIntInclusive(0,nomi.length -1);
    var random2 = getRandomIntInclusive(0,cognomi.length -1);
    var nomi = nomi[random];
    var cognomi = cognomi[random2];
    gatsby.push(nomi + " " + cognomi);
}
console.log(gatsby);      

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso 
}