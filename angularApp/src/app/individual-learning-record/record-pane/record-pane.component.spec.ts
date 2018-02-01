import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordPaneComponent } from './record-pane.component';

describe('RecordPaneComponent', () => {
  let component: RecordPaneComponent;
  let fixture: ComponentFixture<RecordPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
