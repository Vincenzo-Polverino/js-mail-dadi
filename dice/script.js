console.log('linked');

//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

let user_dice = Math.floor(Math.random() * 6) + 1;

let cpu_dice = Math.floor(Math.random() * 6) + 1;

console.log('User:', user_dice);
console.log('CPU:', cpu_dice);

//Stabilire il vincitore, in base a chi fa il punteggio più alto
