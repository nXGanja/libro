var titulo = prompt("Introduce el titulo de un Libro que te Guste", " ");
var autor = prompt("Introduce el Nombre del Autor del Libro", " ");
var editorial = prompt("Introduce el Nombre de la Editorial del Libro", " ");



function ObtenerTitulo(titulo)
{
    var resultado = alert("El Nombre o Titulo del Libro es: "+titulo);
    return resultado;
}
function ObtenerAutor(autor)
{
    var resultado = alert("El Nombre del Autor es: "+ autor);
    return resultado;
}
function ObtenerEditorial(editorial)
{
    var resultado = alert("El Nombre de la Editorial es: "+editorial);
    return resultado;
}

ObtenerTitulo(titulo);
ObtenerAutor(autor);
ObtenerEditorial(editorial);
