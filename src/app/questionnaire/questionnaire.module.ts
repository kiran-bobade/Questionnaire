import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor/editor.component';
import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { PreviewComponent } from './preview/preview.component';
import { CommentComponent } from './comment/comment.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { RadioComponent } from './radio/radio.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { SelectComponent } from './select/select.component';
import { QuestionComponent } from './question/question.component';



@NgModule({
  declarations: [EditorComponent, PreviewComponent
    , CommentComponent
    , ParagraphComponent
    , RadioComponent
    , CheckBoxComponent
    , SelectComponent, QuestionComponent],
  imports: [
    CommonModule
    , FormsModule
    , QuestionnaireRoutingModule
  ],
  entryComponents: [CommentComponent
    , ParagraphComponent
    , RadioComponent
    , CheckBoxComponent
    , SelectComponent],
  bootstrap: [EditorComponent]
})
export class QuestionnaireModule { }
