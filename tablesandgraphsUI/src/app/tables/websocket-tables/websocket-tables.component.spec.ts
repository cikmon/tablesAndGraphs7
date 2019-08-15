import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSocketTablesComponent } from './websocket-tables.component';

describe('WebSocketTablesComponent', () => {
  let component: WebSocketTablesComponent;
  let fixture: ComponentFixture<WebSocketTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebSocketTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebSocketTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
