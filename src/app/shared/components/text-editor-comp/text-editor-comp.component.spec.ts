import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorCompComponent } from './text-editor-comp.component';

describe('TextEditorCompComponent', () => {
  let component: TextEditorCompComponent;
  let fixture: ComponentFixture<TextEditorCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextEditorCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextEditorCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
