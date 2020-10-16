var nombre = document.getElementById('NOMBRE DEL PUBLICANTE');
var apellido = document.getElementById('APELLIDO DEL PUBLICANTE');
var titulo = document.getElementById('TITULO');
var carrera = document.getElementById('CARRERA');

nombre.innerText = localStorage.getItem('nombre');

alert("el nombre del publicante es:" + nombre);
alert("apellido: " + apellido);

console.log("el nombre del publicante es:" + nombre);

localStorage.getItem('nombre');
localStorage.getItem('apellido');
localStorage.getItem('titulo');
localStorage.getItem('carrera');