import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() initialValue?: number;
  @Output() handleValue: EventEmitter<number> = new EventEmitter();
  valueToshow = 0;
  constructor() {}

  ngOnInit(): void {
    if (this.initialValue) {
      this.valueToshow = this.initialValue;
    }
    this.handledValue(this.valueToshow);
  }

  handledValue(event: any) {
    this.handleValue.emit(event);
  }
}

import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  exports: [SliderComponent],
  declarations: [SliderComponent],
  providers: [],
})
export class SliderModule {}
