import { TestBed } from '@angular/core/testing';

import { DictionaryService } from 'src/app/service/dictionary.service';

describe('ImportDataService', () => {
  let service: DictionaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({ teardown: { destroyAfterEach: false } });
    service = TestBed.inject(DictionaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
