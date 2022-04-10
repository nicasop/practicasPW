document.write("<h1>HOLA MUNDO</h1>");
var nombre = "Alexis"
var apellido = "Villavicencio"
var edad = 24
document.write(`<h1>Mi nombre es ${nombre} ${apellido} tengo ${edad} años</h1>`);
var pasatiempos = ["baloncesto","leer","música"];
var cuidad = "Quito";
var trabajo = false;
document.write("<h2>Mis pasatiempos son:</h2><ul>")
pasatiempos.forEach(element => {
    document.write(`<li>${element}</li>`);
});
document.write("</ul>");