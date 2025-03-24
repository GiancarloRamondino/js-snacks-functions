/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
let vocali = ['a','e','i','o','u'];
function contaVocali(word){
    let conta=0;
    for (let i=0; i<word.length; i++){
        if(vocali.includes(word[i]))
            conta++;
    }
    return conta;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(contaVocali(word))


//Risultato atteso se si passa 'javascript': 3 (a, a, i)