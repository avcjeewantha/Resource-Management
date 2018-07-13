import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcemanagerportalComponent } from './resourcemanagerportal.component';

describe('ResourcemanagerportalComponent', () => {
  let component: ResourcemanagerportalComponent;
  let fixture: ComponentFixture<ResourcemanagerportalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcemanagerportalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcemanagerportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
