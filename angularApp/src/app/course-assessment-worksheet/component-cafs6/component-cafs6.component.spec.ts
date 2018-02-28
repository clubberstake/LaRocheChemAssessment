import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCafs6Component } from './component-cafs6.component';

describe('ComponentCafs5Component', () => {
  let component: ComponentCafs6Component;
  let fixture: ComponentFixture<ComponentCafs6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentCafs6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCafs6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
