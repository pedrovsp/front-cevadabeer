import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniProductionComponent } from './mini-production.component';

describe('MiniProductionComponent', () => {
  let component: MiniProductionComponent;
  let fixture: ComponentFixture<MiniProductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniProductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
