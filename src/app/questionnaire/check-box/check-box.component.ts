import { Component, OnInit } from '@angular/core';
import { IComponent } from '../IComponent';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.sass']
})
export class CheckBoxComponent implements OnInit, IComponent {


  public options = [
    { value: 'option 1' },
    { value: 'option 2' },
    { value: 'option 3' },
    { value: 'option 4' }
  ];

  constructor() { }

  ngOnInit() {
  }

  addOption() {
    this.options.push({ value: '' });
  }

  removeOption(index: number) {
    this.options.splice(index, 1);
  }
}
