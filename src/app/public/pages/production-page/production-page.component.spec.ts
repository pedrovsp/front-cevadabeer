import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionPageComponent } from './production-page.component';

describe('ProductionPageComponent', () => {
  let component: ProductionPageComponent;
  let fixture: ComponentFixture<ProductionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
