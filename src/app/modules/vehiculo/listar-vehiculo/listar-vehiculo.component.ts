import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../classes/vehiculo';
import { VehiculoService } from '../services/vehiculo.service';

@Component({
  selector: 'app-listar-vehiculo',
  templateUrl: './listar-vehiculo.component.html',
  styleUrls: ['./listar-vehiculo.component.css'],
})
export class ListarVehiculoComponent implements OnInit {
  vehiculos: Array<Vehiculo> = [];
  totalMarcas: Array<any> = [];
  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit() {
    this.getVehiculos();
  }
  getVehiculos() {
    this.vehiculoService.getVehiculo().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
      this.calcularMarcas();
    });
  }
  calcularMarcas() {
    this.vehiculos.forEach((vehiculo) => {
      let existe = this.totalMarcas.find((element) =>
        element ? element.marca == vehiculo.marca : false
      );
      if (existe) {
        this.totalMarcas = this.totalMarcas.map((veh) => {
          if (veh.marca == vehiculo.marca) {
            veh.total++;
          }
          return veh;
        });
      } else {
        this.totalMarcas.push({ marca: vehiculo.marca, total: 1 });
      }
    });
  }
}
