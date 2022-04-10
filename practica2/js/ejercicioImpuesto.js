const tablaImpuesto={
    "fBasica":[0,11212,14285,17854,21442,42874,64297,85729,114288],
    "ifBasica":[0,0,154,511,941,4156,8440,13798,22366],
    "ifExcedente":[0,0.05,0.10,0.12,0.15,0.20,0.25,0.30,0.35]
}
const dimension = tablaImpuesto.fBasica.length;

function calculoImpuestoRenta(){
    if(camposVacios()){
        var ingresos = document.querySelector('#ingresos').value;
        var gastos = calculoGastos();
        var cont;
        var baseImponible=ingresos-gastos;
        for(var i=0; i<dimension; i++){
            if(i <= dimension - 2){
                if (baseImponible>tablaImpuesto.fBasica[i] && baseImponible<=tablaImpuesto.fBasica[i+1]) {
                    cont = i;
                    break;
                }   
            }else {
                cont = i;
                break;
            }
        }
        var impuestoFraccionBasica=tablaImpuesto.ifBasica[cont];
        var excedente=baseImponible-tablaImpuesto.fBasica[cont]; 
        var porcentajeExcedente=excedente*tablaImpuesto.ifExcedente[cont];
        var impuesto=impuestoFraccionBasica+porcentajeExcedente;
        let respuesta = document.querySelector('#respuesta');
        respuesta.innerHTML=`<h3>Su impuesto a la renta es </h3> ${impuesto}`;
        limpiarCampos(); 
    }
    else{
        alert('Campos Vacios');
    }
};

function calculoGastos(){
    var viv = parseInt(document.querySelector('#vivienda').value,10);
    var edu = parseInt(document.querySelector('#educacion').value,10);
    var ali = parseInt(document.querySelector('#alimentacion').value,10);
    var ves = parseInt(document.querySelector('#vestimenta').value,10);
    var tur = parseInt(document.querySelector('#turismo').value,10);
    var sal = parseInt(document.querySelector('#salud').value,10);
    var gp = parseInt(document.querySelector('#gastosP').value,10);
    var resultado = viv+edu+ali+ves+tur+sal+gp; 
    return resultado;
};

function limpiarCampos(){
    document.querySelector('#ingresos').value = "";
    document.querySelector('#vivienda').value = "";
    document.querySelector('#educacion').value = "";
    document.querySelector('#alimentacion').value = "";
    document.querySelector('#vestimenta').value = "";
    document.querySelector('#turismo').value = "";
    document.querySelector('#salud').value = "";
    document.querySelector('#gastosP').value = "";
}

function camposVacios(){
    var des = true;
    if (document.querySelector('#ingresos').value == ""){
        des = false;
    }
    if (document.querySelector('#vivienda').value == ""){
        des = false;
    }
    if (document.querySelector('#educacion').value == ""){
        des = false;
    }
    if (document.querySelector('#alimentacion').value == ""){
        des = false;
    }
    if (document.querySelector('#vestimenta').value == ""){
        des = false;
    }
    if (document.querySelector('#turismo').value == ""){
        des = false;
    }
    if (document.querySelector('#salud').value == ""){
        des = false;
    }
    if (document.querySelector('#gastosP').value == ""){
        des = false;
    }
    return des;
}