//Exercici 5.1:  A partir de la pàgina web proporcionada (ex5_1.html) fes servir el DOM per mostrar per pantalla amb la funció alert() la següent informació: a. Número d'enllaços que hi ha a la pàgina. b. Adreça (URL) del penúltim enllaç. c. Numero d'enllaços que ho fan a http://www.uab.cat d. Número d'enllaços al tercer paràgraf.//
function e51a(){
    alert("Número d'enllaços: " + document.links.length);
}
function e51b(){
    alert("Adreça del penúltim enllaç: " + +document.links[document.links.length-2].href);
}
function e51c(){
   var comptador = 0;
	for(var i=0; i<document.links.length; i++) {
		if(document.links[i].href == "http://www.uab.cat" || document.links[i].href == 	"http://www.uab.cat/") {
			comptador ++;
		}
	}
	alert("Hi ha "+comptador+" enllaços que apunten a http://www.uab.cat");
}
function e51d(){
    var parrafs = document.getElementsByTagName("p");
	enllaços = parrafs[2].getElementsByTagName("a");
	alert("Número d'enllaços del tercer pàragraf: "+enllaços.length);
}

//Exercici 5.2:  A partir de la pàgina web proporcionada (Ex5_1.html) afegeix un paràgraf nou, amb el text “Hola món!”: a. Al final de dels paràgrafs existents. b. Entre el segon i el tercer paràgraf. //
