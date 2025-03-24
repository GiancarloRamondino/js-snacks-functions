/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
let lettera = prompt('inserisci una lettera');
function filtraIniziali(names, lettera){
    let iniziali = [];
    for (let i=0; i < names.length; i++){
        if (names[i][0].toUpperCase() === lettera.toUpperCase()){
            iniziali.push(names[i]);
        }
    }
    return iniziali;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(filtraIniziali(names,lettera));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]