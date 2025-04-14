console.log('HELLO TYPESCRIPT!')
// anche i commenti si scrivono come in JS!
// altro commento
console.log('vediamo se compila da solo')
// commento nuovo!
console.log('ci siamo')
// ts -> js -> html con liveserver
// cosa possiamo fare in TS che NON possiamo fare in JS?
// specificare i TIPI DI DATO
// primitivi:
// string, number, boolean, undefined, null, any
var counter = 0 // <-- in TS si possono specificare i tipi con l'operatore :
var student = 'Stefano'
student = 'Mario'
// student = 1 //  -> mi dà errore, perchè sto cercando di cambiare tipo!
// i tipi di dato sulle variabili sono necessari, ma il più delle volte TS
// riuscirà a DEDURRE automaticamente il tipo giusto (senza obbligarci a
// specificarlo manualmente) grazie al VALORE della variabile
// questa capacità di TS si chiama "TYPE INFERENCE"
console.log(student.toLowerCase()) // suggerisce i metodi delle stringhe e segnala errori!
student.slice(0, 1).toLowerCase() // anche in caso di metodi consecutivi
var num = 15
num = 'ciao'
num = null
// "any" è un tipo che accetta QUALUNQUE VALORE
// stiamo "spegnendo" il controllo dei tipi di TS
// ...a questo punto tanto valeva scrivere in JS
// any NON andrebbe mai usato a meno di un fix temporaneo o quando non si conosce il
// tipo di un dato, parametro etc. in attesa di risolverlo!
// FUNZIONI
var sayCiao = function () {
  return 'Ciao!'
}
console.log(sayCiao().length) // 5
var numero = function () {
  return 10
}
var somma = function (num1, num2) {
  if (num2 === void 0) {
    num2 = 0
  }
  return num1 + num2
}
var risultato = somma(67, 33) // 100
