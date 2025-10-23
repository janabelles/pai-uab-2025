//14.1.- Escriu un programa que, donat un número llegit amb prompt, escrigui el missatge “el número llegit és negatiu” si el número és més petit que zero i escrigui el missatge “el número llegit és positiu” en cas contrari.//
let numero = parseFloat(prompt("Introdueix un número:"));

if (numero < 0) {
    console.log("El número llegit és negatiu");
}
else {
    console.log("El número llegit és positiu");
}  

//14.2.- Escriu un programa que, donat un número llegit amb prompt, escrigui el missatge “el número llegit és parell” si el número és parell i escrigui el missatge “el número llegit és senar” en cas contrari.//
let numero2 = parseInt(prompt("Introdueix un número enter:"));
if (numero2 % 2 === 0) {
    console.log("El número llegit és parell");
}   
else {
    console.log("El número llegit és senar");
}

//14.3.- Escriu un programa que, donats dos números llegits amb prompt, escrigui quin dels dos és el major.Només pots fer servir una instrucció if-else.//
let num1 = parseFloat(prompt("Introdueix el primer número:"));
let num2 = parseFloat(prompt("Introdueix el segon número:"));
if (num1 > num2) {
    console.log("El primer número és major:", num1);
}
else {
    console.log("El segon número és major:", num2);
}       

//14.4.- Escriu un programa que, donat tres números llegits amb prompt, escrigui a la consola quin es el més gran. Pista. Comprova si el primer número llegit és el més gran. Si no és així, comprova si el més gran és el segon. Si tampoc ho és, el més gran, sens dubte, serà el tercer.//
let a = parseFloat(prompt("Introdueix el primer número:"));
let b = parseFloat(prompt("Introdueix el segon número:"));
let c = parseFloat(prompt("Introdueix el tercer número:"));
if (a >= b && a >= c) {
    console.log("El número més gran és el primer:", a);
}   
else if (b >= a && b >= c) {
    console.log("El número més gran és el segon:", b);
}
else {
    console.log("El número més gran és el tercer:", c);
}

//14.5.- Escriu un programa que, donats tres números llegits amb prompt, escrigui a la consola els tres números ordenats. //
let x = parseFloat(prompt("Introdueix el primer número:"));
let y = parseFloat(prompt("Introdueix el segon número:"));
let z = parseFloat(prompt("Introdueix el tercer número:"));
let numeros = [x, y, z];
numeros.sort(function(a, b) {
    return a - b;
}); 
console.log("Números ordenats:", numeros);

//14.6.- En un control d’alcoholèmia necessiten un programa que els hi digui si una persona pot conduir o no. El programa demanarà dues dades: Si la persona té carnet de conduir i el valor que ha sortit a la prova d’alcoholèmia. El programa ha de respondre que sí pot conduir si té carnet de conduir i la prova d’alcoholèmia ha donat un valor inferior a 0.25 //
let teCarnet = prompt("Tens carnet de conduir? (si/no)").toLowerCase();
let alcohol = parseFloat(prompt("Quin és el valor de la prova d'alcoholèmia?"));
if (teCarnet === "si" && alcohol < 0.25) {
    console.log("Sí pots conduir.");
}
else {
    console.log("No pots conduir.");
}

//14.7.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola el resultat de restar al nombre més gran el nombre més petit. //
let numeroA = parseFloat(prompt("Introdueix el primer número:"));
let numeroB = parseFloat(prompt("Introdueix el segon número:"));
if (numeroA > numeroB) {
    console.log("La resta és:", numeroA - numeroB);
}
else {
    console.log("La resta és:", numeroB - numeroA);
}

//14.8.- Escriu un programa que simuli la compra a una web. L’usuari haurà d’introduir una quantitat (el que cal pagar) per teclat fent servir la instrucció prompt. En cas que la quantitat sigui 30€ o més, es mostrarà a la consola un missatge indicant que el cost total és de 30€ donat que el transport és gratis. En cas que la quantitat sigui inferior a 30€, es mostrarà un missatge dient el preu total que consistirà en l’introduït més 4.95€ en concepte de cost d’enviament. //
let quantitat = parseFloat(prompt("Introdueix la quantitat a pagar:"));
if (quantitat >= 30) {
    console.log("El cost total és de 30€ (transport gratis).");
}
else {
    let total = quantitat + 4.95;
    console.log("El cost total és de:", total.toFixed(2), "€ (inclou 4.95€ d'enviament).");
}

//14.9.- Un usuari va a una gelateria i per calcular el cost del seu gelat té un ordinador on posa dues dades: 1. Si vol un conus (c) o una terrina (t). El conus té un cost base de 3.45 i la terrina de 3.95 2. Quin d’aquests sabors vol: 1. Vainilla o Xocolata. No cal afegir res 2. Turró, Menta o Oreo. Caldrà afegir 0.5 al preu final. 3. Crema, Gerds o Ametlles. Caldrà afegir 1 al preu final. Si l’usuari posa alguna dada malament, el missatge que es posarà a la consola serà “Error dades mal introduïdes” Si totes les dades són correctes, escriurà el preu final.//
let tipus = prompt("Vols un conus (c) o una terrina (t)?").toLowerCase();
let sabor = prompt("Quin sabor vols? (vainilla/xocolata/turro/menta/oreo/crema/gerds/ametlles)").toLowerCase();
let preuBase;   
if (tipus === "c") {
    preuBase = 3.45;
}
else if (tipus === "t") {
    preuBase = 3.95;
}
else {
    console.log("Error dades mal introduïdes");
    preuBase = null;
}
if (preuBase !== null) {
    if (sabor === "turro" || sabor === "menta" || sabor === "oreo") {
        preuBase += 0.5;
    }
    else if (sabor === "crema" || sabor === "gerds" || sabor === "ametlles") {
        preuBase += 1;
    }
    else if (sabor !== "vainilla" && sabor !== "xocolata") {
        console.log("Error dades mal introduïdes");
        preuBase = null;
    }
    if (preuBase !== null) {
        console.log("El preu final és:", preuBase.toFixed(2), "€");
    }
}
