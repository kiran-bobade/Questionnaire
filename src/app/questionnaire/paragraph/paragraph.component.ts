import { Component, OnInit } from '@angular/core';
import { IComponent } from '../IComponent';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.sass']
})
export class ParagraphComponent implements OnInit, IComponent {

  constructor() { }

  ngOnInit() {
  }

}
