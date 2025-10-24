//18.1.- Escriu, fent servir la instrucció do-while, un programa que escrigui a la consola 10 cops el text “Estem fent bucles”. //
let count = 0;
do {
    console.log("Estem fent bucles");
    count++;
} while (count < 10);

//  18.2.- Escriu, fent servir la instrucció do-while, un programa que escrigui a la consola tots els nombres del 5 al 20. //
let num = 5;
do {
    console.log(num);
    num++;
} while (num <= 20);

//18.3.- Escriure un programa, fent servir la instrucció do-while, que, donat un número N, escrigui a la consola tots els números de N a 1 (per tant, en ordre descendent). Observa el que passa si N < 1. //
let N = parseInt(prompt("Introdueix un número N: "));
do {
    console.log(N);
    N--;
} while (N >= 1);

//18.4.- Escriu un programa que, donat un nombre N, ens digui si és primer. Un número és primer si només és divisible per 1 i per ell mateix (això implica que caldrà comprovar si hi ha algun número entre 1 i N que sigui divisor de N)//
let N2 = parseInt(prompt("Introdueix un número N per comprovar si és primer: "));
let i = 2;
let esPrimer = true;
if (N2 <= 1) {
    esPrimer = false;
}
do {
    if (N2 % i === 0) {
        esPrimer = false;
        break;
    }
    i++;
} while (i <= Math.sqrt(N2));

if (esPrimer) {
    console.log(N2 + " és un número primer.");
} else {
    console.log(N2 + " no és un número primer.");
}

//18.5.- Escriu, fent servir la instrucció do-while, un programa que demani (fent servir la instrucció prompt), 10 números, i ens digui quin és el més gran. //
let maxNum = null;
let countNums = 0;
do {
    let userNum = parseFloat(prompt("Introdueix un número: "));
    if (maxNum === null || userNum > maxNum) {
        maxNum = userNum;
    }
    countNums++;
} while (countNums < 10);
console.log("El número més gran és: " + maxNum);

