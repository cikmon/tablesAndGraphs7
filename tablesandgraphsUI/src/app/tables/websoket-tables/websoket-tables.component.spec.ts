import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsoketTablesComponent } from './websoket-tables.component';

describe('WebsoketTablesComponent', () => {
  let component: WebsoketTablesComponent;
  let fixture: ComponentFixture<WebsoketTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsoketTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsoketTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
