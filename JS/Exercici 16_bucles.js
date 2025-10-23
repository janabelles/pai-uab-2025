//Exercici 16.1
//for
for (let i = 0; i < 10; i++) {
    console.log("Estem fent bucles for");
}


//while
let i = 0;
while (i < 10) {
    console.log("Estem fent bucles while");
    i++;
}


//do while
let j = 0;
do {
    console.log("Estem fent bucles do while");
    j++;
} while (j < 10);  





//Exercici 16.2
//for
for (let i = 5; i <= 20; i++) {
    console.log(i);
}

//while
let x = 5;
while (x <= 20) {
    console.log(x);
    x++;
}

//do while
let y = 5; 
do {
    console.log(y);
    y++;
} while (y <= 20);  


//16.3.- Escriu un programa que, donat un nombre N, escrigui a la consola la suma de tots els nombres entre 1 i N.// 
let N = parseInt(prompt("Introdueix un nombre N:"));
let suma = 0;
for (let i = 1; i <= N; i++) {
suma += i; 
}
console.log("La suma de tots els nombres entre 1 i " + N + " és: " + suma);

//16.4.- Escriu un programa que, donat un nombre N, escrigui a la consola el factorial d’aquest nombre. El factorial és la multiplicació de tots els números entre 1 i N.// 
let num = parseInt(prompt("Introdueix un nombre N per calcular el seu factorial:"));
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i; 
}
console.log("El factorial de " + num + " és: " + factorial);
    
//16.5.- Escriu un programa que, donat dos números N i M (on N sempre serà menor que M) calculi la suma de tots els números entre N i M (ambdós inclosos).//
let N2 = parseInt(prompt("Introdueix el nombre N (N < M):"));
let M = parseInt(prompt("Introdueix el nombre M (M > N):"));
let suma2 = 0;
for (let i = N2; i <= M; i++) {
    suma2 += i; 
}
console.log("La suma de tots els nombres entre " + N2 + " i " + M + " és: " + suma2);
    
//16.6.- Escriu un programa que, donat un número N, calculi la suma de tots els números parells entre 2 i N.//
let N3 = parseInt(prompt("Introdueix un nombre N per calcular la suma dels nombres parells entre 2 i N:"));
let sumaParells = 0;
for (let i = 2; i <= N; i++) {
    if (i % 2 == 0) {
        suma += i;
    }
}
console.log("La suma de tots els nombres parells entre 2 i " + N3 + " és: " + sumaParells);
    
//16.7.- Escriu un programa que, donat un número N, escrigui a la consola la taula de multiplicar de N.//
let N4 = parseInt(prompt("Introdueix un nombre N per veure la seva taula de multiplicar:"));
for (let i = 1; i <= 10; i++) {
console.log(N + " x " + i + " = " + (N * i));
}
    
//16.8.- Escriu un programa que, donat un número N, escrigui a la consola tots els números de N a 1 (per tant, en ordre descendent). Observa el que passa si N < 1// 
let N5 = parseInt(prompt("Introdueix un nombre N per escriure els nombres de N a 1:"));
for (let i = N5; i >= 1; i--) {
    console.log(i);
}
    
//16.9.- Escriu un programa que donat un número N, escrigui N asteriscos (*) //
let N6 = parseInt(prompt("Introdueix un nombre N per escriure N asteriscos:"));
let asteriscos = "";
for (let i = 0; i < N6; i++) {
    asteriscos += "*";
}
    
//16.10.- Escriu un programa que donat un número N, escrigui el següent dibuix (cas que el número introduït sigui 5).* ** *** **** ***** //
let N7 = parseInt(prompt("Introdueix un nombre N per escriure el dibuix:"));
for (let i = 1; i <= N7; i++) {
    let fila = "";
    for (let j = 1; j <= i; j++) {
        fila += "*";
    }   
    console.log(fila);
}
    
//16.11.- Escriu un programa que donat dos números N i M, crei i sumi una sèrie com la següent: Si N ← 2 i M ← 5 Sortida per consola:  2 22 222 2222 22222  La suma de la sèrie és:24690//
let N8 = parseInt(prompt("Introdueix el nombre N per crear la sèrie:"));
let M2 = parseInt(prompt("Introdueix el nombre M per crear la sèrie:"));
let sumaSerie = 0;
let terme = "";
for (let i = 1; i <= M2; i++) {
    terme += N8.toString(); 
    console.log(terme); 
    sumaSerie += parseInt(terme); 
}
console.log("La suma de la sèrie és: " + sumaSerie);
