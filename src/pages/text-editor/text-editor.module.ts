import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TextEditorPage } from './text-editor';

@NgModule({
  declarations: [
    TextEditorPage,
  ],
  imports: [
    IonicPageModule.forChild(TextEditorPage),
  ],
})
export class TextEditorPageModule {}
