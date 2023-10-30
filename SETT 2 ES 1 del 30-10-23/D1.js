/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

let stringa = "Stringa, Una stringa è una sequenza finita di caratteri.  " 
console.log (stringa)

let num = "Numero, è un dato numerico senza distinzione formale come tra intero e decimale." 
console.log (num)

let bing = " Bigint,  è un dato numerico troppo grande per essere rappresentato  dai numeri primitivi  " 
console.log (bing)

let boolean = " Boolean, rappresenta se uno o piu valori sono veri o falsi " 
console.log (boolean)

let unde = "  Undefined, indica che ad una variabile non è stato assegnato un valore o non è stata dichiarata affatto. " 
console.log (unde)

let nullo = " Null, il dato fornito non è un valore numerico valido, né una stringa, né un oggetto " 
console.log (nullo)

let simbolo = " Symbol, servono a comporre le espressioni in JavaScript " 
console.log (simbolo)

let oggetto = " Object, è un contenitore di valori eterogene che formano una struttura " 
console.log (oggetto)



/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let nome = "edward"

console.log(nome) 

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

const numero = "12"

console.log(Number(numero) + 20)


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = "12"

console.log(x) 

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

let nomecambiato = nome.replace ("edward","rossi")
console.log(nomecambiato)  

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(Number(x)-4) 

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "jhon"
let name2 = "Jhon"
let name2cambiato = name2.replace ("Jhon","jhon")

console.log(name1!= name2) // name 1 e name 2 sono diversi
console.log(name2cambiato === name1)          // name 1 e name 2 sono uguali se entrambe vengono trasformate in lowercase