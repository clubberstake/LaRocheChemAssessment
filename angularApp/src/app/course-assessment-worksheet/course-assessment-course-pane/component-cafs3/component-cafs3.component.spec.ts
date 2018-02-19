import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCafs3Component } from './component-cafs3.component';

describe('ComponentCafs3Component', () => {
  let component: ComponentCafs3Component;
  let fixture: ComponentFixture<ComponentCafs3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentCafs3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCafs3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});