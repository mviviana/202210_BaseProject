/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListarVehiculoComponent } from './listar-vehiculo.component';
import { Vehiculo } from '../classes/vehiculo';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';
import { VehiculoService } from '../services/vehiculo.service';

describe('ListarVehiculoComponent', () => {
  let component: ListarVehiculoComponent;
  let fixture: ComponentFixture<ListarVehiculoComponent>;
  let debug: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ListarVehiculoComponent],
      providers: [VehiculoService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVehiculoComponent);
    component = fixture.componentInstance;

    component.vehiculos = [];
    for (let index = 0; index < 3; index++) {
      component.vehiculos.push(
        new Vehiculo(
          faker.datatype.number(),
          faker.vehicle.manufacturer(),
          faker.vehicle.vehicle(),
          faker.vehicle.type(),
          faker.datatype.number(),
          faker.datatype.number(),
          faker.vehicle.color(),
          faker.image.transport()
        )
      );
    }

    debug = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render tr cantidad vehiculos', () => {
    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(4);
  });


});
