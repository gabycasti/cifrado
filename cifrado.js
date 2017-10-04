//function principal () {
	do{

		var resp = prompt("Indique el numero de lo que desea hacer: 1)Encriptar - 2)Desencriptar");

		if(resp != ""){
			if (resp == "1"){
				var palabra = prompt("ingrese la palabra que desea  Encriptar");
				cipher(palabra);
			} else if (resp == "2") {
				var palabra = prompt("ingrese la palabra que desea  Desencriptar");
				decipher(palabra);
			} else {
				alert("Ingrese una opción válida");
			}
		}
	} while (resp == "" || (resp != "1" && resp != "2"));
//}
      



function cipher(palabra){
	var result = "";
	var cod = 0;
    
    palabra = palabra.toUpperCase();
    
	for (i=0; i<palabra.length;i++){
		cod = palabra.charCodeAt(i);
		cod = ((cod-65+33)%26)+65;
		result+= String.fromCharCode(cod); 
	}

	alert(result);
}

			
function decipher(palabra){
	var result = " ";
	var cod = 0;

	palabra = palabra.toUpperCase();
    
	for (i=0; i<palabra.length;i++){
		cod = palabra.charCodeAt(i);
		cod = (((65-cod)+33)%26)+65;
		result+= String.fromCharCode(cod); 
	}

	palabra = palabra.toLowerCase();
	alert(result);
}