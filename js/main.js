/*
Crea una funzione chiamata sommaNumeri che prenda un array di N numeri e calcoli la somma di tutti questi numeri contenuti nell'array, restituendolo come risultato.
Utilizzare la funzione sommaNumeri per stampare il risultato. 
L'array di N numeri da passare alla funzione lo create chiedendo all'utente quanti numeri vuole inserire (cioè N)
e poi facendogli inserire questi N numeri all'utente stesso tramite apposito prompt().

Crea una funzione chiamata mediaAritmetica che prende in input un array di N numeri e restituisca la media aritmetica dei numeri contenuti nell'array.
Utilizzare la funzione sommaNumeri precedentemente creata per calcolare la media dei numeri che vanno chiesti all'utente attraverso dei prompt.
Potete ad esempio provare ad usare questo programma per inserire N voti di scuola e farvi restituire qual è la media di tutti i voti inseriti!
*/



//----- PROGRAMMA PRINCIPALE -----
let result = sommaNumeri();
let media = mediaAritmetica(result);
console.log("La somma dei numeri che hai scelto è: " + result);
console.log("La media dei numeri che hai scelto è: " + media);




//------ FUNZIONI ------
function sommaNumeri() {
    let numeriUtente = parseInt(prompt("Quanti numeri vuoi inserire?"));
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

function mediaAritmetica(somma) {
    let numeriUtente = parseInt(prompt("Quanti numeri hai inserito in totale?"));
    let media = somma / numeriUtente.toFixed(2);
    return media;
}


