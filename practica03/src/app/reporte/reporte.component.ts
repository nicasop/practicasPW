import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../User';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  users:User[] = [];
  
  constructor(private dataService:DataService) {
    this.dataService.obtenerDatos().subscribe(data =>
      {
        this.users = data;
      });
  }

  ngOnInit(): void {
  }

}
