import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCafs2Component } from './component-cafs2.component';

describe('ComponentCafs2Component', () => {
  let component: ComponentCafs2Component;
  let fixture: ComponentFixture<ComponentCafs2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentCafs2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCafs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
