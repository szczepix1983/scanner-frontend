import { TestBed } from '@angular/core/testing';

import { FacadeService } from 'src/app/service/facade.service';

describe('ImportDataService', () => {
  let service: FacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({ teardown: { destroyAfterEach: false } });
    service = TestBed.inject(FacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
