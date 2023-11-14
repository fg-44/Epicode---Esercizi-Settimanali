/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
 
*/

const n1 = 6
const n2 = 14

if (n1 > n2)
    console.log('Il numero più grande è', n1)
else
   console.log('Il numero più grande è', n2)


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const n3 = 1

if (n3 != 5)
    console.log("not equal")
else
   console.log("equal")


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const n4 = 15

if (n4 % 5 === 0)
    console.log("divisible per 5")
else
   console.log("non divisible per 5")


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

function verifica(num1, num2) {

  if (num1 == 8 || num2 == 8 || num1 + num2 == 8 || num1 - num2 == 8 )
    return "True"
  else
    return "False"
 }

 //Test:

 console.log(verifica(4, 4)) // False
 console.log(verifica(8, 0)) // True
 
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

    
let totalShoppingCart = 51
let shippingCost = 10

if (totalShoppingCart < 50) { 
  console.log (totalShoppingCart + shippingCost)
} else {
  console.log (totalShoppingCart)
}



/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let totalShoppingCart2 = 200
totalShoppingCart2 =totalShoppingCart2 * 0.8 
let shippingCost2 = 10

if (totalShoppingCart2 < 50) { 
  console.log (totalShoppingCart2 + shippingCost2)
} else {
  console.log (totalShoppingCart2)   
} 


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

num1 = 50
num2 = 40
num3 = 60

if (num1 > num2,  num1 > num3) {
  console.log(num1, "il più alto")}
    
else if (num2 > num1,  num2 > num3) { 
  console.log(num2, "il più alto")}
  
else
console.log (num3, "il più alto")



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

function isNumber(num) {
  return typeof num === 'number'
}
console.log (isNumber(5))
console.log (isNumber('number'))


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function isEven(num) {
  return num % 2 === 0
}
console.log (isEven(6))
console.log (isEven(5))


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7;
if (val < 5) {
    console.log('Meno di 5');
} else if (val < 10) {
    console.log('Meno di 10');
} else {
    console.log('Uguale a 10 o maggiore');
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css']
};

me.city = 'Toronto';

console.log(me)


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me)



/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills[2];
console.log(me)

me.skills.pop()
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let tempArray = [];     

for (let i = 1; i <= 10; i++) {
  tempArray.push(i);
}


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
let tempArray1 = [];     
for (let i = 1; i <= 10; i++) {
  tempArray.push(i);
}
tempArray1[10] = 100;


