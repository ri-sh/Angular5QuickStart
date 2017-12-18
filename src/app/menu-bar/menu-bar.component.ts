import { Component, OnInit, Input } from '@angular/core';
import { Tab } from '../tab';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  @Input() menuBarData : Array<Tab>; 
  constructor() { }

  ngOnInit() {
  }

}
