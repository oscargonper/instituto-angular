import { TestBed } from '@angular/core/testing';

import { GradosuperiorService } from './gradosuperior.service';

describe('GradosuperiorService', () => {
  let service: GradosuperiorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradosuperiorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
