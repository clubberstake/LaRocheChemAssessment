import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCafs1Component } from './component-cafs1.component';

describe('ComponentCafs1Component', () => {
  let component: ComponentCafs1Component;
  let fixture: ComponentFixture<ComponentCafs1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentCafs1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCafs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
