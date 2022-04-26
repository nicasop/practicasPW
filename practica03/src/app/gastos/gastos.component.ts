import { Component, OnInit } from '@angular/core';
import { Gastos } from '../Gastos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})

export class GastosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  gastos: Gastos[] = [
    {
      nombre: 'Vivienda',
      descripcion: 'Para poder deducir los gastos de vivienda, estos no pueden ser superiores a $3643.90 dólares',
      selector: 'One',
      descripcionA: '<h4>Gastos incluido en el aparatado de vivienda</h4><br><ul>'+
                   '<li>Arriendo</li>'+
                   '<li>Interéses Prestamo Hipotecario</li>'+
                   '<li>Servicios Básicos</li>'+
                   '<li>Impuesto Predial</li>'+
                   '<li>Pensiones Alimenticias</li>'+
                   '<li>Otros gastos por ejemplo: remodelación de un bien inmueble</li>'+
                   '</ul>'
    },
    {
      nombre: 'Educación',
      descripcion: 'Para poder deducir los gastos de educación, estos no pueden ser superiores a $3643.90 dólares',
      selector: 'Two',
      descripcionA: '<h4>Gastos incluido en el aparatado de educación</h4><br><ul>'+
                   '<li>Matrícula y Pensión</li>'+
                   '<li>Útiles y textos escolares</li>'+
                   '<li>Educación para personas con discapacidad</li>'+
                   '<li>Artes vivas y escénicas</li>'+
                   '<li>Artesanías</li>'+
                   '<li>Pensiones alimenticias</li>'+
                   '</ul>'
    },
    {
      nombre: 'Alimentación',
      descripcion: 'Para poder deducir los gastos de alimentación, estos no pueden ser superiores a $3643.90 dólares',
      selector: 'Three',
      descripcionA: '<h4>Gastos incluido en el aparatado de alimentación</h4><br><ul>'+
                   '<li>Alimentos</li>'+
                   '<li>Pensiones alimenticias</li>'+
                   '<li>Restaurantes</li>'+
                   '</ul>'
    },
    {
      nombre: 'Vestimenta',
      descripcion: 'Para poder deducir los gastos de vestimenta, estos no pueden ser superiores a $3643.90 dólares',
      selector: 'Four',
      descripcionA: '<h4>Gastos incluido en el aparatado de vestimenta</h4><br><ul>'+
                   '<li>Prendas de vestir</li>'+
                   '<li>Pensiones Alimenticias</li>'+
                   '</ul>'
    },
    {
      nombre: 'Turismo',
      descripcion: 'Para poder deducir los gastos de turismo, estos no pueden ser superiores a $3643.90 dólares',
      selector: 'Five',
      descripcionA: '<h4>Gastos incluido en el aparatado de turismo</h4><br><ul>'+
                   '<li>Alojamiento</li>'+
                   '<li>Transporte</li>'+
                   '<li>Servicio de alimentos y bebidas</li>'+
                   '<li>Operación turística</li>'+
                   '<li>Pensiones Alimenticias</li>'+
                   '</ul>'
    },
    {
      nombre: 'Salud',
      descripcion: 'Para poder deducir los gastos de salud, estos no pueden ser superiores a $14575.60 dólares',
      selector: 'Six',
      descripcionA: '<h4>Gastos incluido en el aparatado de salud</h4><br><ul>'+
                   '<li>Honorarios profesionales de la salud</li>'+
                   '<li>Servicios de salud</li>'+
                   '<li>Medicinas y otros</li>'+
                   '<li>Medicina prepagada y prima de seguro medico</li>'+
                   '<li>Deducible del seguro</li>'+
                   '<li>Pensiones Alimenticias</li>'+
                   '</ul>'
    },
    {
      nombre: 'Gastos Personales',
      descripcion: 'El total de gastos personales que se pueden deducir no pueden ser superiores a $14575.60 dólares',
      selector: 'Seven',
      descripcionA: 'Estos deducibles aplican para personas naturales cuyo ingreso neto no sea superios a $100000.000 dólares.<br>'+
                    'El sueldo neto es el cálculo de la diferencia entre el total de ingresos gravados menos el total de gastos deducibles y rebajas para adultos mayores o personas con discapacidad'
    },
  ];

  informacion(información:string){
    Swal.fire({
      icon: 'info',
      title: 'Información Adicional',
      html: información
    })
  }

  borrarGastos(gastos:string){
    for(let i=0; i<this.gastos.length;i++){
      if(gastos==this.gastos[i].nombre){
        this.gastos.splice(i,1);
      }
    }
  }

}