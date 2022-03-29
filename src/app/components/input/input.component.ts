import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() icon?: ICONS;
  @Output() handleValue: EventEmitter<string> = new EventEmitter();

  iconImage = '';
  constructor() {}

  ngOnInit(): void {}

  setIcon() {
    return `assets/icons/${this.icon?.toLowerCase()}.svg`;
  }

  handledValue(event: any) {
    if (event.length >= 3) {
      this.handleValue.emit(event);
    }
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICONS } from '../../enums/global';

@NgModule({
  imports: [CommonModule],
  exports: [InputComponent],
  declarations: [InputComponent],
  providers: [],
})
export class InputModule {}
