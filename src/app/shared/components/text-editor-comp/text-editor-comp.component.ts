import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CKEditor4 } from 'ckeditor4-angular';

@Component({
  selector: 'app-text-editor-comp',
  templateUrl: './text-editor-comp.component.html',
  styleUrls: ['./text-editor-comp.component.css']
})
export class TextEditorCompComponent implements OnInit {
  @Input() ckText: any = "hello";
  @Output() changeVal = new EventEmitter<any>();
  @Output() dataChangeVal = new EventEmitter<any>();
  @Output() focusVal = new EventEmitter<any>();
  @Output() blurVal = new EventEmitter<any>();
  @Output() uploadVal = new EventEmitter<any>();
  @Output() afterUploadVal = new EventEmitter<any>();
  @Output() pasteVal = new EventEmitter<any>();
  @Output() afterPasteVal = new EventEmitter<any>();


  // public model = {
  //   editorData: '<p>Hello, world!</p>'
  // };

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: CKEditor4.EventInfo) {
    // console.log('inside ckeditor parent...',event.editor.getData());
    this.changeVal.emit(event.editor.getData())
  }

  onDataChange(event: CKEditor4.EventInfo) {
    // console.log('datachange inside ckeditor parent...', event);
    this.dataChangeVal.emit(event);
  }

  onFocus(event: CKEditor4.EventInfo) {
    // console.log('focus inside ckeditor parent...', event.editor.getData());
    this.focusVal.emit(event.editor.getData())
  }

  onBlur(event: CKEditor4.EventInfo) {
    // console.log('blur inside ckeditor parent...', event.editor.getData());
    this.blurVal.emit(event.editor.getData());
  }

  onPaste(event: CKEditor4.EventInfo) {
    // console.log('paste inside ckeditor parent...', event.editor.getData());
    this.pasteVal.emit(event.editor.getData());
  }

  onAfterPaste(event: CKEditor4.EventInfo) {
    // console.log('afterPaste inside ckeditor parent...', event.editor.getData());
    this.afterPasteVal.emit(event.editor.getData());
  }

  onNamespaceLoaded(event: any) {
    // console.log('datachange inside ckeditor parent...', event);
  }

  onUploadReq(event: CKEditor4.EventInfo) {
    // console.log('uploadEvent inside ckeditor parent...', event.editor.getData());
    this.uploadVal.emit(event.editor.getData());
  }

  onUploadRes(event: CKEditor4.EventInfo) {
    // console.log('afterUploadEvent inside ckeditor parent...', event.editor.getData());
    this.afterUploadVal.emit(event.editor.getData());
  }
}