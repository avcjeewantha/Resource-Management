import { TestBed, inject } from '@angular/core/testing';

import { ResourcemanagerAuthGuardService } from './resourcemanager-auth-guard.service';

describe('ResourcemanagerAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResourcemanagerAuthGuardService]
    });
  });

  it('should be created', inject([ResourcemanagerAuthGuardService], (service: ResourcemanagerAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
