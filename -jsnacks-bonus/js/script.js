// var name = prompt('inserisci il tuo nome');

// for (var i = 0; i < name.length; i++) {
//     var crazy2 = name[i];
//     var crazy = name.length - i;
//     crazy2 = crazy;
//     console.log(crazy2);
// }

var name = prompt('inserisci il tuo nome');
var hours = parseInt(prompt('inserisci le tue ore lavorative'));
var regularJob = hours*16;
var extraHours = ((hours-160)*16)*0.25;
var extraJob = (160*16) + extraHours;

if (hours <= 160) {
    console.log(regularJob);    
} else {
    console.log(extraJob);   
}