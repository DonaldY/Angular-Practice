import { TestBed } from '@angular/core/testing';

import { AppHandlerService } from './app-handler.service';

describe('AppHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppHandlerService = TestBed.get(AppHandlerService);
    expect(service).toBeTruthy();
  });
});
