//15.1.- Fent servir la instrucció switch escriu un programa que donat amb prompt un número de mes, entre 1 i 12, escrigui per pantalla el nom del mes que correspon.// 
let mes = parseInt(prompt("Introdueix un número de mes (1-12):"));
let nomMes;
switch (mes) {
    case 1:
        nomMes = "Gener";
        break;
    case 2:
        nomMes = "Febrer";
        break;
    case 3:
        nomMes = "Març";
        break;
    case 4:
        nomMes = "Abril";
        break;
    case 5:
        nomMes = "Maig";
        break;
    case 6: 
        nomMes = "Juny";
        break;
    case 7:
        nomMes = "Juliol";
        break;
    case 8:
        nomMes = "Agost";
        break;
    case 9:
        nomMes = "Setembre";
        break;
    case 10:
        nomMes = "Octubre";
        break;
    case 11:
        nomMes = "Novembre";
        break;
    case 12:
        nomMes = "Desembre";
        break;
    default:
        nomMes = "Número de mes invàlid";
} 

//15.2.- Un usuari va a una gelateria i per calcular el cost del seu gelat té un ordinador on posa dues dades: 1. Si vol un conus (c) o una terrina (t). El conus té un cost base de 3.45 i la terrina de 3.95 2. Quin d’aquests sabors vol: 1. Vainilla o Xocolata. No cal afegir res 2. Turró, Menta o Oreo. Caldrà afegir 0.5 al preu final. 3. Crema, Gerds o Ametlles. Caldrà afegir 1 al preu final. Fes servir la instrucció switch per fer el càlcul de l’increment de preu associat al sabor. Si l’usuari posa alguna dada malament, el missatge que es posarà a la consola serà “Error dades mal introduïdes”. Si totes les dades són correctes, escriurà el preu final.// 
let tipusGelat = prompt("Vols un conus (c) o una terrina (t)?").toLowerCase();
let saborGelat = prompt("Quin sabor vols? (vainilla, xocolata, turró, menta, oreo, crema, gerds, ametlles)").toLowerCase();
let preuBase;
let incrementPreu = 0;
if (tipusGelat === 'c') {
    preuBase = 3.45;
} else if (tipusGelat === 't') {
    preuBase = 3.95;
} else {
    console.log("Error dades mal introduïdes");
}
switch (saborGelat) {
    case 'vainilla':
    case 'xocolata':
        incrementPreu = 0;
        break;
    case 'turró':
    case 'menta':
    case 'oreo':        
        incrementPreu = 0.5;
        break;
    case 'crema':
    case 'gerds':
    case 'ametlles':
        incrementPreu = 1;
        break;
    default:
        console.log("Error dades mal introduïdes");
}
let preuFinal = preuBase + incrementPreu;
console.log("El preu final del gelat és: " + preuFinal.toFixed(2) + " euros.");

//15.3.- Escriu un programa, que donat una lletra que representa un dia de la setmana (l - dilluns, m - dimarts, x - dimecres, j - dijous, …) escrigui a la consola si el dia és laborable o festiu. Són laborables de dilluns a divendres. Fes servir la instrucció switch.// 
let diaSetmana = prompt("Introdueix una lletra que representa un dia de la setmana (l, m, x, j, v, s, d):").toLowerCase();
switch (diaSetmana) {
    case 'l':
    case 'm':   
    case 'x':
    case 'j':
    case 'v':
        console.log("El dia és laborable.");    
        break;
    case 's':
    case 'd':
        console.log("El dia és festiu.");  
        break;
    default:
        console.log("Lletra invàlida per a un dia de la setmana.");
}
 
