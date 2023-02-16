import { TestBed } from '@angular/core/testing';

import { NBAApiInterceptor } from './n-ba-api.interceptor';

describe('NBAApiInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [NBAApiInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: NBAApiInterceptor = TestBed.inject(NBAApiInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
