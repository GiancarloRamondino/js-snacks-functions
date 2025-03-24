/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */




// Dichiara la funzione qui.
const userName = prompt('inserisci il tuo nome');
let saluto = 'Ciao';
let salutoCompleto = saluto +' '+ userName;

// Invoca la funzione qui e stampa il risultato in console
function salutoUtente(userName){
    return salutoCompleto= saluto +' '+ userName;
}


//Risultato atteso se si passa 'Mario': // ciao Mario
console.log(salutoUtente(userName));