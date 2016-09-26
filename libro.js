/*var titulo = prompt("Introduce el titulo de un Libro que te Guste", " ");
var autor = prompt("Introduce el Nombre del Autor del Libro", " ");
var editorial = prompt("Introduce el Nombre de la Editorial del Libro", " ");
*/


function ObtenerTitulo(titulo)
{
	var titulo = prompt("Introduce el Nombre del Titulo del Libro"," ");
    var resultado = alert("El Nombre o Titulo del Libro es: "+titulo);
    return resultado;
}
function ObtenerAutor(autor)
{
	var autor = prompt("Introduce el Nombre del Autor del Libro"," ");
    var resultado = alert("El Nombre del Autor es: "+ autor);
    return resultado;
}
function ObtenerEditorial(editorial, adp)
{
	var editorial = prompt("Introduce el Nombre de la editorial del Libro"," ");
    var resultado = alert("El Nombre de la Editorial es: "+editorial);
    return resultado;
}
function obtenertituloyautor(){
		var titulo = document.getElementById("titulo").value;
    	var autor =  document.getElementById("autor").value;
    	var editorial =  document.getElementById("editorial").value;
    	alert("El Titulo del Libro es: "+titulo);
    	alert("El Autor del Libro es: "+autor);
    	alert("La Editorial del Libro es: "+editorial);
	}
ObtenerTitulo(titulo);
ObtenerAutor(autor);
ObtenerEditorial(editorial);
