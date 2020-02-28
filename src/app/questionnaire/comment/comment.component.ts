import { Component, OnInit } from '@angular/core';
import { IComponent } from '../IComponent';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent implements OnInit, IComponent {

  constructor() { }

  ngOnInit() {
  }

}
