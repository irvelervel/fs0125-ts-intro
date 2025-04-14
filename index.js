console.log('HELLO TYPESCRIPT!');
// anche i commenti si scrivono come in JS!
// altro commento
console.log('vediamo se compila da solo');
// commento nuovo!
console.log('ci siamo');
// ts -> js -> html con liveserver
// cosa possiamo fare in TS che NON possiamo fare in JS?
// specificare i TIPI DI DATO
// primitivi:
// string, number, boolean, undefined, null, any
var counter = 0; // <-- in TS si possono specificare i tipi con l'operatore :
var student = 'Stefano';
student = 'Mario';
// student = 1 //  -> mi dà errore, perchè sto cercando di cambiare tipo!
// i tipi di dato sulle variabili sono necessari, ma il più delle volte TS
// riuscirà a DEDURRE automaticamente il tipo giusto (senza obbligarci a
// specificarlo manualmente) grazie al VALORE della variabile
// questa capacità di TS si chiama "TYPE INFERENCE"
console.log(student.toLowerCase()); // suggerisce i metodi delle stringhe e segnala errori!
student.slice(0, 1).toLowerCase(); // anche in caso di metodi consecutivi
var num = 15;
num = 'ciao';
num = null;
// "any" è un tipo che accetta QUALUNQUE VALORE
// stiamo "spegnendo" il controllo dei tipi di TS
// ...a questo punto tanto valeva scrivere in JS
// any NON andrebbe mai usato a meno di un fix temporaneo o quando non si conosce il
// tipo di un dato, parametro etc. in attesa di risolverlo!
// FUNZIONI
var sayCiao = function () {
    return 'Ciao!';
};
console.log(sayCiao().length); // 5
var numero = function () {
    return 10;
};
var somma = function (num1, num2) {
    if (num2 === void 0) { num2 = 0; }
    return num1 + num2;
};
var risultato = somma(67, 33); // 100
var concatString = function (s1, s2, s3) {
    return s1 + s2 + s3;
};
// così le due invocazioni successive funzioneranno entrambe
concatString('ciao ', 'sono ', 'stefano'); // "ciao sono stefano"
concatString('ho ', 15, ' gatti'); // "ho 15 gatti"
var concatString2 = function (s1, s2, s3) {
    return s1 + s2 + s3;
};
var greetings = function (name, greet) {
    return (greet || 'ciao') + ', ' + name;
};
greetings('ciao', 'stefano'); // 'ciao, stefano'
greetings('buonasera', 'armando'); // 'buonasera, armando'
greetings('stefano'); // 'ciao, stefano'
greetings('gennaro');
// ARRAY
var names = ['Antonio', 'Felice', 'Maddalena', 'Vincenza'];
// ts ha già capito che names è di tipo "string[]", cioè un array di string
names.forEach(function (n) {
    console.log('Ciao, ' + n);
});
var justInitials = names.map(function (n) {
    return n.slice(0, 1);
}); // ['A', 'F', 'M', 'V']
justInitials.push('S'); // posso pushare solo stringhe!
var newArray = [];
newArray.push('stringhe', 100);
var nums = [4];
nums.push(5);
// gli array in TS non hanno specifiche per quanto riguarda la posizione degli elementi
// relativamente al loro tipo
var mixed = [];
mixed[0] = true;
mixed[1] = 5;
// TUPLE
var myTuple = [1, 4, false];
// una tupla è un tipo particolare per gli array in TS che descrive il numero di
// elementi iniziali e il loro tipo, posizione per posizione
// OGGETTI
// gli oggetti, come gli array, vanno definiti il più dettagliatamente possibile
var obj1 = {
    name: 'computer',
    brand: 'apple',
    model: 'macbook air',
    price: 999,
    color: {
        name: 'midnight blue',
        glossy: false,
    },
};
var colorName = obj1.color.name.toUpperCase();
var dog1 = {
    name: 'Fido',
    age: 5,
    breed: 'Shepard',
    canFly: true,
};
// le classi esistono anche in TS, però hanno uno scopo diverso: creano dei veri e propri
// "stampini", "timbri" per gli oggetti; a partire da dei valori, le classi formano
// l'oggetto proprietà dopo proprietà
var Pet = /** @class */ (function () {
    function Pet(_name, _age, _breed, _canFly) {
        this.name = _name;
        this.age = _age;
        this.breed = _breed;
        this.canFly = _canFly;
    }
    return Pet;
}());
// però andrebbero indicati i TIPI nei parametri del constructor altrimenti rischiamo
// di mescolari i valori
var f = new Pet(true, 'fido', 5, 'shepard');
var person1 = {
    firstName: 'Mario',
    lastName: 'Bros',
    age: 50,
    location: 'New York',
    yearsOfExperience: 30,
    drivingLicense: true,
};
var person2 = {
    firstName: 'Peach',
    lastName: 'Toadstool',
    location: 'Mushroom Kingdom',
    yearsOfExperience: 0,
    drivingLicense: true,
};
var marioCharacters = [];
marioCharacters.push(person1);
marioCharacters.push(person2);
marioCharacters.forEach(function (p) {
    var _a;
    console.log((_a = p.age) === null || _a === void 0 ? void 0 : _a.toPrecision(2));
    // il ? viene chiamato "optional chaining"
    // serve a proseguire nel concatenamento dei metodi e proprietà solamente quando
    // il valore prima di ? è "truthy" (cioè non è false, null, undefined)
});
// per agassi serviranno tutte le proprietà di HumanBeing unite a tutte le proprietà
// aggiunte in TennisPlayer
var agassi = {
    firstName: 'Andre',
    lastName: 'Agassi',
    age: 54,
    location: 'USA',
    drivingLicense: true,
    yearsOfExperience: 39,
    favouriteHand: 'right',
    tournamentsWon: +Infinity,
};
var italianAddress = {
    city: 'Genova',
    street: 'Corso Italia',
    civicNumber: 50,
    zipCode: 16100,
    area: 'Liguria',
};
var americanAddress = {
    city: 'Seattle',
    street: 'Columbia st',
    civicNumber: 355,
    zipCode: 9104,
    area: {
        country: 'USA',
        state: 'Washington',
    },
};
