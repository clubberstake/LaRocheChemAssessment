import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCafs4Component } from './component-cafs4.component';

describe('ComponentCafs4Component', () => {
  let component: ComponentCafs4Component;
  let fixture: ComponentFixture<ComponentCafs4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentCafs4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCafs4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
