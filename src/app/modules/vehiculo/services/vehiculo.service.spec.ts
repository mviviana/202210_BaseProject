/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VehiculoService } from './vehiculo.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('Service: Vehiculo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehiculoService],
      imports: [HttpClientTestingModule],
    });
  });

  it('should create', inject([VehiculoService], (service: VehiculoService) => {
    expect(service).toBeTruthy();
  }));
});
