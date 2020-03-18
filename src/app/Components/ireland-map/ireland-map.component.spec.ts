import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrelandMapComponent } from './ireland-map.component';

describe('IrelandMapComponent', () => {
  let component: IrelandMapComponent;
  let fixture: ComponentFixture<IrelandMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrelandMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrelandMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
