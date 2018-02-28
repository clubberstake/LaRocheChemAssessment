import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCafs5Component } from './component-cafs5.component';

describe('ComponentCafs5Component', () => {
  let component: ComponentCafs5Component;
  let fixture: ComponentFixture<ComponentCafs5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentCafs5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCafs5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
