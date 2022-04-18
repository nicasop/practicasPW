import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tablaImpuesto={
      "fBasica":[0,11212,14285,17854,21442,42874,64297,85729,114288],
      "ifBasica":[0,0,154,511,941,4156,8440,13798,22366],
      "ifExcedente":[0,0.05,0.10,0.12,0.15,0.20,0.25,0.30,0.35]
  }
  dimension = this.tablaImpuesto.fBasica.length;

  calculoImpuestoRenta(){
    var ingresos = document.querySelector('#ingresos') as HTMLInputElement;
    var gastos = this.calculoGastos();
    var cont=0;
    var baseImponible=ingresos.valueAsNumber-gastos;
    for(var i=0; i<this.dimension; i++){
        if(i <= this.dimension - 2){
            if (baseImponible>this.tablaImpuesto.fBasica[i] && baseImponible<=this.tablaImpuesto.fBasica[i+1]) {
                cont = i;
                break;
            }   
        }else {
            cont = i;
            break;
        }
    }
    var impuestoFraccionBasica=this.tablaImpuesto.ifBasica[cont];
    var excedente=baseImponible-this.tablaImpuesto.fBasica[cont]; 
    var porcentajeExcedente=excedente*this.tablaImpuesto.ifExcedente[cont];
    var impuesto=impuestoFraccionBasica+porcentajeExcedente;
    console.log(impuesto);
    let respuestaCont = document.querySelector('#respuesta') as HTMLDivElement;
    let respuesta = document.createElement("p");
    respuesta.textContent = `Su impuesto a la renta es ${impuesto}`;
    respuestaCont.appendChild(respuesta);
    respuestaCont.focus();
    this.limpiarCampos(); 
  };

  calculoGastos(){
      var viv = document.querySelector('#vivienda') as HTMLInputElement;
      var edu = document.querySelector('#educacion') as HTMLInputElement;
      var ali = document.querySelector('#alimentacion') as HTMLInputElement;
      var ves = document.querySelector('#vestimenta') as HTMLInputElement;
      var tur = document.querySelector('#turismo') as HTMLInputElement;
      var sal = document.querySelector('#salud') as HTMLInputElement;
      var gp = document.querySelector('#gastosP') as HTMLInputElement;
      var resultado = viv.valueAsNumber +edu.valueAsNumber +ali.valueAsNumber+ves.valueAsNumber+tur.valueAsNumber+sal.valueAsNumber+gp.valueAsNumber; 
      return resultado;
  };

  limpiarCampos(){
      let ing = document.querySelector('#ingresos') as HTMLInputElement;
      ing.value = "";
      let viv = document.querySelector('#vivienda') as HTMLInputElement;
      viv.value = "";
      let edu = document.querySelector('#educacion') as HTMLInputElement;
      edu.value = "";
      let ali = document.querySelector('#alimentacion')as HTMLInputElement;
      ali.value = "";
      let ves = document.querySelector('#vestimenta') as HTMLInputElement;
      ves.value = "";
      let tur = document.querySelector('#turismo') as HTMLInputElement;
      tur.value = "";
      let sal = document.querySelector('#salud') as HTMLInputElement;
      sal.value = "";
      let gP = document.querySelector('#gastosP') as HTMLInputElement;
      gP.value = "";
  }

  Calculo(){
    let form = document.querySelector("#form") as HTMLFormElement
    form.addEventListener('submit', evt => {
      evt.preventDefault();
      this.calculoImpuestoRenta();
    });
  }

}


