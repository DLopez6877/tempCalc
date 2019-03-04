/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MlsService } from './mls.service';

describe('Service: Mls', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MlsService]
    });
  });

  it('should ...', inject([MlsService], (service: MlsService) => {
    expect(service).toBeTruthy();
  }));
});
