console.log('JS OK!')
/*
Traccia:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Prima di partire a scrivere codice poniamoci qualche domanda
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

BONUS:
Provare a stampare la lista in pagina invece che in console.

*/

// 1 - Stampare in console i numeri da 1 a 100
// 2 - Per i multipli di 3 stampare "Fizz" al posto del num
// 3 - Per i multipli di 5 stampare "Buzz" al posto del num
// 4 - Per i multipli sia di 3 che di 5 stampare "FizzBuzz"
// 5 - Validare
// 6 - Recuperare gli elementi in pagina
// 7 - Stampare in pagina

// Recupero gli elementi in pagina
const gameElement = document.getElementById('game');


let result ='';
// Creo un ciclo che stampi in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    
    // Cambio il risultato per i multipli di 3 o di 5
    if ((i % 3 === 0) && (i % 5 === 0)) {
        result += '<li>FizzBuzz</li>';
    } else if (i % 3 === 0) {
        result += '<li>Fizz</li>';
    } else if (i % 5 === 0) {
        result += '<li>Buzz</li)';
    } else {
        result += `<li>${i}</li>`;
    }
}

console.log(`result a fine ciclo`, result)

// Stampo in pagina
gameElement.innerHTML = result;