import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {

  @Input() nametaken: string;
  name: string = 'childToParent';
  @Output() namewomiting: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    this.namewomiting.emit(this.name);
  }

}
