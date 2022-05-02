import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehiculo } from '../classes/vehiculo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VehiculoService {
  constructor(private http: HttpClient) {}

  getVehiculo(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(environment.urlBase);
  }
}
