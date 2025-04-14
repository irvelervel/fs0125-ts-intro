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

let counter: number = 0 // <-- in TS si possono specificare i tipi con l'operatore :

let student = 'Stefano'
student = 'Mario'
// student = 1 //  -> mi dà errore, perchè sto cercando di cambiare tipo!

// i tipi di dato sulle variabili sono necessari, ma il più delle volte TS
// riuscirà a DEDURRE automaticamente il tipo giusto (senza obbligarci a
// specificarlo manualmente) grazie al VALORE della variabile
// questa capacità di TS si chiama "TYPE INFERENCE"

console.log(student.toLowerCase()) // suggerisce i metodi delle stringhe e segnala errori!
student.slice(0, 1).toLowerCase() // anche in caso di metodi consecutivi

let num: any = 15
num = 'ciao'
num = null
// "any" è un tipo che accetta QUALUNQUE VALORE
// stiamo "spegnendo" il controllo dei tipi di TS
// ...a questo punto tanto valeva scrivere in JS
// any NON andrebbe mai usato a meno di un fix temporaneo o quando non si conosce il
// tipo di un dato, parametro etc. in attesa di risolverlo!

// FUNZIONI
const sayCiao = function () {
  return 'Ciao!'
}

console.log(sayCiao().length) // 5

const numero = function (): number {
  return 10
}

const somma = function (num1: number, num2: number = 0) {
  return num1 + num2
}

const risultato = somma(67, 33) // 100

const concatString = function (s1: string, s2: string | number, s3: string) {
  return s1 + s2 + s3
}

// così le due invocazioni successive funzioneranno entrambe
concatString('ciao ', 'sono ', 'stefano') // "ciao sono stefano"
concatString('ho ', 15, ' gatti') // "ho 15 gatti"

// questa invece è giusto che non ce la dia buona
// concatString('ho ', {ciao: true}, ' gatti') // "ho 15 gatti"

// string | number <-- TYPE UNION (come negli insiemi alle elementari)

// TYPE ALIAS (creazione di tipi personalizzati)
type MyType = string | number

const concatString2 = function (s1: string, s2: MyType, s3: string) {
  return s1 + s2 + s3
}

const greetings = function (name: string, greet?: string) {
  return (greet || 'ciao') + ', ' + name
}

greetings('ciao', 'stefano') // 'ciao, stefano'
greetings('buonasera', 'armando') // 'buonasera, armando'

greetings('stefano') // 'ciao, stefano'

greetings('gennaro')

// ARRAY
const names = ['Antonio', 'Felice', 'Maddalena', 'Vincenza']
// ts ha già capito che names è di tipo "string[]", cioè un array di string
names.forEach((n) => {
  console.log('Ciao, ' + n)
})

const justInitials = names.map((n) => {
  return n.slice(0, 1)
}) // ['A', 'F', 'M', 'V']

justInitials.push('S') // posso pushare solo stringhe!
const newArray: MyType[] = []
newArray.push('stringhe', 100)

const nums: number[] = [4]
nums.push(5)

// gli array in TS non hanno specifiche per quanto riguarda la posizione degli elementi
// relativamente al loro tipo
const mixed: (number | boolean)[] = []
mixed[0] = true
mixed[1] = 5

// TUPLE
const myTuple: [number, number, boolean] = [1, 4, false]
// una tupla è un tipo particolare per gli array in TS che descrive il numero di
// elementi iniziali e il loro tipo, posizione per posizione

// OGGETTI
// gli oggetti, come gli array, vanno definiti il più dettagliatamente possibile
const obj1 = {
  name: 'computer',
  brand: 'apple',
  model: 'macbook air',
  price: 999,
  color: {
    name: 'midnight blue',
    glossy: false,
  },
}

const colorName = obj1.color.name.toUpperCase()

// TS poi ci aiuta nella creazione di oggetti in serie
// grazie alle INTERFACCE
// le interfaces servono per definire solamente la FORMA di un oggetto
// da riempire poi manualmente, venendo suggeriti delle proprietà e controllando gli errori
interface Pet {
  name: string
  age: number
  breed: string
  canFly: boolean
}

const dog1: Pet = {
  name: 'Fido',
  age: 5,
  breed: 'Shepard',
  canFly: true,
}

// le classi esistono anche in TS, però hanno uno scopo diverso: creano dei veri e propri
// "stampini", "timbri" per gli oggetti; a partire da dei valori, le classi formano
// l'oggetto proprietà dopo proprietà
class Pet {
  constructor(_name, _age, _breed, _canFly) {
    this.name = _name
    this.age = _age
    this.breed = _breed
    this.canFly = _canFly
  }
}

// però andrebbero indicati i TIPI nei parametri del constructor altrimenti rischiamo
// di mescolari i valori
const f = new Pet(true, 'fido', 5, 'shepard')
