import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestTabletsComponent } from './rest-tablets.component';

describe('RestTabletsComponent', () => {
  let component: RestTabletsComponent;
  let fixture: ComponentFixture<RestTabletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestTabletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestTabletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
