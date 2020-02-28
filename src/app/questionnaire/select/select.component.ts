import { Component, OnInit } from '@angular/core';
import { IComponent } from '../IComponent';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass']
})
export class SelectComponent implements OnInit, IComponent {

  constructor() { }

  ngOnInit() {
  }

}
