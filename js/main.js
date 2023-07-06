/*
Crea una funzione chiamata sommaNumeri che prenda un array di N numeri e calcoli la somma di tutti questi numeri contenuti nell'array, restituendolo come risultato.
Utilizzare la funzione sommaNumeri per stampare il risultato. 
L'array di N numeri da passare alla funzione lo create chiedendo all'utente quanti numeri vuole inserire (cioè N)
e poi facendogli inserire questi N numeri all'utente stesso tramite apposito prompt(). */



//-----programma principale-----
let result = sommaNumeri();
console.log("La somma dei numeri che hai scelto è: " + result);



//------funzioni------
function sommaNumeri() {

    let numeriUtente = prompt("Quanti numeri vuoi inserire?");
    let numbers = [];

    for (let i = 0; i < numeriUtente; i++) {
        let sceltaNumero = parseInt(prompt("Inserisci un numero:"));
        numbers.push(sceltaNumero);

    }

    let somma = 0;
    for (let i = 0; i < numbers.length; i++) {
        somma += numbers[i];

    }
    return somma;
}
