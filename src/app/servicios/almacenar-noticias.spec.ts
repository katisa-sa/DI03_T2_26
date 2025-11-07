import { TestBed } from '@angular/core/testing';

import { AlmacenarNoticias } from './almacenar-noticias';

describe('AlmacenarNoticias', () => {
  let service: AlmacenarNoticias;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlmacenarNoticias);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
