import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectmanagerportalComponent } from './projectmanagerportal.component';

describe('ProjectmanagerportalComponent', () => {
  let component: ProjectmanagerportalComponent;
  let fixture: ComponentFixture<ProjectmanagerportalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectmanagerportalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectmanagerportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
