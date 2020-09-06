var nomi = [1,2,3,4,5];
var cognomi = [1,2,3];

while (nomi.length != cognomi.length) {
    if (nomi.length > cognomi.length) {
        cognomi.push(Math.floor(Math.random()*10));
    } else if (nomi.length < cognomi.length) {
        cognomi.push(Math.floor(Math.random()*10));
    }
}
console.log(nomi);
console.log(cognomi);