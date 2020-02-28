import { Component, OnInit, Type, Output, EventEmitter, ChangeDetectorRef, ViewChild, ComponentRef, ViewContainerRef } from '@angular/core';
import { IComponent } from '../IComponent';
import { CommentComponent } from '../comment/comment.component';
import { ParagraphComponent } from '../paragraph/paragraph.component';
import { CheckBoxComponent } from '../check-box/check-box.component';
import { RadioComponent } from '../radio/radio.component';
import { SelectComponent } from '../select/select.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass']
})
export class QuestionComponent implements OnInit {

  public type: Type<IComponent> = CommentComponent;
  public answerType = 1;
  @Output() public saveQ = new EventEmitter();
  @ViewChild('answer', { static: true }) answer: any;
  public mapping = [
    { name: 'Comment', value: 1, comp: CommentComponent },
    { name: 'Paragraph', value: 2, comp: ParagraphComponent },
    { name: 'Multiple Choice', value: 3, comp: CheckBoxComponent },
    { name: 'Single Choice', value: 4, comp: RadioComponent },
    { name: 'Selection', value: 5, comp: SelectComponent }];

  constructor(private readonly changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    console.log('container', this.answer);
  }

  toggleAnswer(event: any) {
    console.log(event);
    if (event.target.value > -1) {
      this.type = this.mapping[this.answerType - 1].comp;
    }
  }

  save() {
    console.log('child', this.answer);

    this.changeDetector.detectChanges();
    const componentModel = this.mapping[this.answerType - 1].comp;
    console.log(componentModel);
    this.saveQ.emit(componentModel);
  }
  clone() {

  }
  remove() {

  }

}
