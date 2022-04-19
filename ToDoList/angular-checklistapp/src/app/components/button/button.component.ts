import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styles: [
  ]
})
export class ButtonComponent implements OnInit {

  @Input() text: string;
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick()
  {
    // Since this button component is reusable 
    // we need each button to have its own unique function
    // will emit an event that can be listened for
    this.btnClick.emit()
  }

}
