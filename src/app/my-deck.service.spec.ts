import { TestBed } from '@angular/core/testing';

import { MyDeckService } from './my-deck.service';

describe('MyDeckService', () => {
  let service: MyDeckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyDeckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
