import { TestBed } from '@angular/core/testing';

import { GestionarNoticias } from './gestionar-noticias';

describe('GestionarNoticias', () => {
  let service: GestionarNoticias;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionarNoticias);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
