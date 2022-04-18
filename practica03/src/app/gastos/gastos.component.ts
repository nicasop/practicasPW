import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})

export class GastosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  gastos: GastosInterface[] = [
    {
      nombre: 'Vivienda',
      descripcion: 'Vivienda',
      selector: 'One',
    },
    {
      nombre: 'Educación',
      descripcion: 'Educación',
      selector: 'Two',
    },
    {
      nombre: 'Alimentación',
      descripcion: 'Alimentación',
      selector: 'Three'
    },
    {
      nombre: 'Vestimenta',
      descripcion: 'Vestimenta',
      selector: 'Four'
    },
    {
      nombre: 'Turismo',
      descripcion: 'Turismo',
      selector: 'Five'
    },
    {
      nombre: 'Salud',
      descripcion: 'Salud',
      selector: 'Six'
    },
    {
      nombre: 'Gastos Personales',
      descripcion: 'Gastos Personales',
      selector: 'Seven'
    },
  ];

  informacion(gastos:string){
    alert('Esta es información adicional sobre '+gastos);
  }

  borrarGastos(gastos:string){
    for(let i=0; i<this.gastos.length;i++){
      if(gastos==this.gastos[i].nombre){
        this.gastos.splice(i,1);
      }
    }
  }

}

interface GastosInterface {
  nombre: string;
  descripcion: string;
  selector: string;
}
