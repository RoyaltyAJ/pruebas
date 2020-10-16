function datos() {
    this.Nombre = "";
    this.Apellido = "";
    this.Carrera = "";
    this.Titulo = "";
    this.Comentario = "";
    this.Links = "";
    this.Fecha = "";

this.getNombre = function(){
    return this.nombre;
}

this.getApellido = function() {
    return this.apellido;
}

this.getCarrera = function() {
    return this.carrera;
}

this.getTitulo = function() {
    return this.titulo;
}

this.getComentario = function() {
    return this.comentario;
}

this.getLinks = function() {
    return this.links;
}

this.getFecha = function() {
    return this.fecha;
}

this.setNombre = function(nomb) {
    this.nombre = nomb;
}

this.setApellido = function(apelli) {
    this.apellido = apelli;
}

this.setCarrera = function(carre) {
    this.carrera = carre;
}

this.setTitulo = function(titu) {
    this.titulo = titu;
}

this.setComentario = function(comen) {
    this.comentario = comen;
}

this.setLinks = function(links) {
    this.links = links;
}

this.setFecha = function(fecha) {
    this.fecha = fecha;
}

}

function salida() {

var obj = new datos();

var nomb = document.getElementById("nombre").value;
var apelli = document.getElementById("apellido").value;
var carre = document.getElementById("carrera").value;
var titu = document.getElementById("titulo").value;
var comen = document.getElementById("comentario").value;
var links = document.getElementById("links de la publicacion").value;
var fecha = document.getElementById("fecha de publicacion").value;

obj.setNombre(nomb);
obj.setApellido(apelli);
obj.setCarrera(carre);
obj.setTitulo(titu);
obj.setComentario(comen);
obj.setLinks(links);
obj.setFecha(fecha);

var nr1 = obj.getNombre();
var nr2 = obj.getApellido();
var nr3 = obj.getCarrera();
var nr4 = obj.getTitulo();
var nr5 = obj.getComentario();
var nr6 = obj.getLinks();
var nr7 = obj.getFecha();

localStorage.setItem('nombre', nr1);
localStorage.setItem('apellido', nr2);
localStorage.setItem('carrera', nr3);
localStorage.setItem('titulo', nr4);
localStorage.setItem('comentario', nr5);
localStorage.setItem('links' , nr6);
localStorage.setItem('fecha', nr7);

}