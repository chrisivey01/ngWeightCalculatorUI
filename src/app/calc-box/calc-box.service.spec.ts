import { TestBed, inject } from '@angular/core/testing';

import { CalcBoxService } from './calc-box.service';

describe('CalcBoxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalcBoxService]
    });
  });

  it('should be created', inject([CalcBoxService], (service: CalcBoxService) => {
    expect(service).toBeTruthy();
  }));
});
