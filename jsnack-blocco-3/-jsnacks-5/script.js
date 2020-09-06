var array = [2,6,7,9,5,3,10,24,55];
var count = 0;

for (var i = 0; i < array.length; i++) {
    if (i%2) {   
       count += array[i];  
    }
}
console.log('....');
console.log(count);

