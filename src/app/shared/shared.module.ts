import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEditorCompComponent } from './components/text-editor-comp/text-editor-comp.component';
import { CKEditorModule } from 'ckeditor4-angular';

@NgModule({
    imports: [
        CommonModule,
        CKEditorModule
    ],
    exports: [
        CommonModule,
        TextEditorCompComponent
    ],
    declarations: [
        TextEditorCompComponent
    ],
    providers: [],
})
export class SharedModule { }
