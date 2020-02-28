import { Component, OnInit } from '@angular/core';
import { IComponent } from '../IComponent';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.sass']
})
export class RadioComponent implements OnInit, IComponent {

  constructor() { }

  ngOnInit() {
  }

}
