import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfectedInfoComponent } from './infected-info.component';

describe('InfectedInfoComponent', () => {
  let component: InfectedInfoComponent;
  let fixture: ComponentFixture<InfectedInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfectedInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfectedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
