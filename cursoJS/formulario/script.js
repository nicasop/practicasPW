window.onload = init;

function init(){
   let porcentaje = document.querySelector("#por");
    var mostrar = document.querySelector("#rangeValue");
    mostrar.innerHTML = porcentaje.value + "%"; 
}

function displayValue(evt){
    var value = evt.target.value;
    var mostrar = document.querySelector("#rangeValue");
    mostrar.innerHTML = value + "%"; 
}

function validateAge(){
    edad = document.querySelector("#edad");
    if (edad.value < 5 || edad.value > 99){
        edad.setCustomValidity('Edad ingresada no es válida');
    }
    else{
        edad.setCustomValidity('');
    }
}

function radioValue(nombre){
   let elementos = document.getElementsByName(nombre);
   let valor = "";
   elementos.forEach(function(elemento){
       if (elemento.checked){
           valor = elemento.value;
       }
   })
   return valor;
}

function displayTable(datos) {
    let table = document.querySelector("#resumen");
    var row = table.insertRow();
    row.innerHTML = "<td>"+datos.nombre+"</td>"+
                    "<td>"+datos.edad+"</td>"+
                    "<td>"+datos.genero+"</td>"+
                    "<td>"+datos.curso+"</td>"+
                    "<td>"+datos.porcentaje+"% </td>"+
                    "<td>"+datos.horario+"</td>"+
                    "<td>"+datos.modalidad+"</td>";
}

var formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", function(evt){
   evt.preventDefault(); 
   let nombre = document.querySelector("#nombre");
   let edad = document.querySelector("#edad");
   let genero = document.querySelector("#genero");
   let curso = radioValue("curso");
   let porcentaje = document.querySelector("#por");
   let horario = document.querySelector("#horario");
   let modalidad = radioValue("moda");
   let datos = {
       nombre: nombre.value,
       edad: edad.value,
       genero: genero.value,
       curso: curso,
       porcentaje: porcentaje.value,
       horario: horario.value,
       modalidad: modalidad
   };
   displayTable(datos);
})

