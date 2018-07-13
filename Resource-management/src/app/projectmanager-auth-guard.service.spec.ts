import { TestBed, inject } from '@angular/core/testing';

import { ProjectmanagerAuthGuardService } from './projectmanager-auth-guard.service';

describe('ProjectmanagerAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectmanagerAuthGuardService]
    });
  });

  it('should be created', inject([ProjectmanagerAuthGuardService], (service: ProjectmanagerAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
