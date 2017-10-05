function principal () {
	do{

		var resp = prompt("Indique el numero de lo que desea hacer: 1)Encriptar - 2)Desencriptar");

		if(resp != ""){ // Respuesta debe ser distinto a vacio
			if (resp == "1"){
				var palabra = prompt("ingrese la palabra que desea  Encriptar");
				cipher(palabra); // llamo la función Encriptar
			} else if (resp == "2") {
				var palabra = prompt("ingrese la palabra que desea  Desencriptar");
				decipher(palabra); // llamo a la función Desencriptar
			} else {
				alert("Ingrese una opción válida");
			}
		}
	} while (resp == "" || (resp != "1" && resp != "2")); // Salir del ciclo si la respuesta es igual a vacio o diferente a 1 o 2


function cipher(palabra){
	var result = "";
	var cod = 0;
    
    palabra = palabra.toUpperCase(); // Convierto la palabra en mayuscula
    
	for (i=0; i<palabra.length;i++){
		cod = palabra.charCodeAt(i); // Luego de recorrer la palabra le aplico la función charCodeAt la misma pide un indice por eso se le coloca i
		cod = ((cod-65+33)%26)+65; // aplico la formula para obtener el código ascii
		result+=String.fromCharCode(cod);  // Devuelvo la cadena
	}

	alert(result);
}

			
function decipher(palabra){
	var result = " ";
	var cod = 0;

	palabra = palabra.toUpperCase(); // convierto la palabra en mayuscula

   
	for (i=0; i<palabra.length;i++){ 
		cod = palabra.charCodeAt(i); //método devuelve un número indicando el valor Unicode del carácter en el índice proporcionado.
		cod = ((cod-65-7+26)%26)+65; // Formula para Desencriptar
		result+= String.fromCharCode(cod); // me devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.
                                           // Sintaxis

	}

	palabra = palabra.toLowerCase();
	alert(result);
 }
}
principal();