//21.1.- Fes un programa que faci el següent: ● Defineix una variable de tipus taula, buida. ● Afegeixi el valor “Hola” a la posició 0. ● Afegeixi el valor “Adeu” a la posició 1. ● Escrigui a la consola el contingut de la taula. //
let array = [];
array[0] = "Hola";
array[1] = "Adeu";
console.log(array);
alert(array);
document.getElementById ("resultado211").innerHTML = "El primer valor de la taula és: " + array[0] + "El segon valor de la taula és: " + array[1];

//21.2.- Al programa anterior, afegeix les instruccions necessàries (després del console.log()) per a fer el següent: ● Afegeixi el valor “Nom” a la posició 2 de la taula. ● Escrigui a la consola el contingut de la taula. ● Modifiqui el valor emmagatzemat a la posició 1 de la taula, guardant el valor “, “ ● Escrigui a la consola el contingut de la taula. //
array[2] = "Nom";
console.log(array);
array[1] = ", ";
console.log(array);
alert(array);
document.getElementById ("resultado212").innerHTML = "El primer valor de la taula és: " + array[0] + "El segon valor de la taula és: " + array[1] + "El tercer valor de la taula és: " + array[2];

//21.3.- Fes un programa que faci el següent: ● Defineixi una variable de tipus taula, amb aquests elements [23,45,98,73]. ● Escrigui a la consola la suma dels elements situats a les posicions 0 i 2 de la taula. ● Guardi a la posició 6 de la taula la suma dels elements  ● Escrigui a la consola el contingut de la taula. Què passa a la posició 5?//
let array2 = [23, 45, 98, 73];
let suma = array2[0] + array2[2];
console.log("La suma dels elements a les posicions 0 i 2 és: " + suma);
array2[6] = suma;
console.log(array2);
alert(array2);
document.getElementById ("resultado213").innerHTML = "El primer valor de la taula és: " + array2[0] + "El segon valor de la taula és: " + array2[1] + "El tercer valor de la taula és: " + array2[2] + "El quart valor de la taula és: " + array2[3] + "El cinquè valor de la taula és: " + array2[4] + "El sisè valor de la taula és: " + array2[5] + "El setè valor de la taula és: " + array2[6];

//Resposta a la pregunta: A la posició 5 hi ha un valor indefinit (undefined) perquè no s'ha assignat cap valor a aquesta posició de la taula.//

//21.4.- Fes un programa que, donat un número (que demanarem per pantalla fent servir prompt()) emmagatzemi a una taula el doble i el triple d’aquest número. Un cop fet, escriu la taula a la consola. //
let numero = parseInt(prompt("Introdueix un número:"));
let array3 = [];
array3[0] = numero * 2;
array3[1] = numero * 3;
console.log("El doble i el triple del número " + numero + " són: " + array3);
alert("El doble i el triple del número " + numero + " són: " + array3);
document.getElementById ("resultado214").innerHTML = "El doble del número és: " + array3[0] + "El triple del número és: " + array3[1];

//21.5.- Fes un programa que, donat dos números, que demanarem per pantalla i emmagatzemarem a dues variables, guardi a una taula els resultats de la suma, la resta, la multiplicació i la divisió dels dos valors introduïts. //
let numero1 = parseFloat(prompt("Introdueix el primer número:"));
let numero2 = parseFloat(prompt("Introdueix el segon número:"));
let operacions = [];
operacions[0] = numero1 + numero2;
operacions[1] = numero1 - numero2;
operacions[2] = numero1 * numero2;
operacions[3] = numero1 / numero2;
console.log("Els resultats de les operacions són: Suma: " + operacions[0] + ", Resta: " + operacions[1] + ", Multiplicació: " + operacions[2] + ", Divisió: " + operacions[3]);
alert("Els resultats de les operacions són: Suma: " + operacions[0] + ", Resta: " + operacions[1] + ", Multiplicació: " + operacions[2] + ", Divisió: " + operacions[3]);
document.getElementById ("resultado215").innerHTML = "La suma és: " + operacions[0] + "La resta és: " + operacions[1] + "La multiplicació és: " + operacions[2] + "La divisió és: " + operacions[3];

//21.6.- Donada aquesta taula: let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78]; Fes un programa que escrigui a la consola els valors situats a la primera i la darrera posició de la taula. ***** Donada la definició d’aquesta taula: let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78]; //
let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
console.log("El primer valor de la taula és: " + taula[0]);
console.log("L'últim valor de la taula és: " + taula[taula.length - 1]);
alert("El primer valor de la taula és: " + taula[0] + "L'últim valor de la taula és: " + taula[taula.length - 1]);
document.getElementById ("resultado216").innerHTML = "El primer valor de la taula és: " + taula[0] + "L'últim valor de la taula és: " + taula[taula.length - 1];


