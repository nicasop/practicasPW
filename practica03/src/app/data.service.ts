import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient: HttpClient){
    console.log('El servicio HTTP esta funcionando');
  }

  obtenerDatos(){
    return this.httpclient.get<User[]>('assets/datosRepo.json');
  }

}
