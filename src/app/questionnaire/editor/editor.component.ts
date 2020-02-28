import { CommentComponent } from '../comment/comment.component';
import { Component, OnInit, ComponentRef, ComponentFactoryResolver, Type } from '@angular/core';
import { IComponent } from '../IComponent';
import { ParagraphComponent } from '../paragraph/paragraph.component';
import { CheckBoxComponent } from '../check-box/check-box.component';
import { RadioComponent } from '../radio/radio.component';
import { SelectComponent } from '../select/select.component';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.sass']
})
export class EditorComponent implements OnInit {

  questions = [
    {}
  ];
  constructor() { }

  ngOnInit() {
  }

  addQuestion() {
    this.questions.push({});
  }

  removeQuestion(index: number) {
    this.questions.splice(index, 1);
  }

  cloneQuestion(question: any) {

  }

  save(question: any) {
    console.log('parent save', question);

  }
}
