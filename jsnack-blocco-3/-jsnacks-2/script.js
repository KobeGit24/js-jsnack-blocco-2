var fortuna = ['oggi troverai una cosa dimenticata', 'cio che e fatto e fatto','il buongiorno si vde dal mattino','sicuro di aver chiuso il gas?','chi semina vento raccoglie tempesta','il mattino ha oro in bocca'];

var random = Math.floor(Math.random() * ((fortuna.length -1) -0 + 1) + 0);
console.log(random);
console.log(fortuna[random]);

