import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() icon?: ICON_TYPE;
  @Input() text?: string;
  @Input() disabled = false;
  @Input() type: string = 'OK';
  @Input() variant: VARIANT_TYPE = VARIANT_BUTTTON.PRIMARY;
  @Output() handleEmit: EventEmitter<string> = new EventEmitter();

  iconImage = '';
  textButton = '';
  primary = false;

  constructor() {}

  ngOnInit(): void {
    this.setIcon();
  }

  setIcon() {
    switch (this.icon) {
      case ICONS.EDIT:
        this.iconImage = 'assets/icons/edit.svg';
        break;
      case ICONS.DELETE:
        this.iconImage = 'assets/icons/delete.svg';
        break;
      case ICONS.SAVE:
        this.primary = true;
        this.iconImage = 'assets/icons/save.svg';
        break;
      case ICONS.CLOSE:
        this.primary = true;
        this.iconImage = 'assets/icons/close.svg';
        break;
      case ICONS.ADD:
        this.primary = true;
        this.iconImage = 'assets/icons/add.svg';
        break;

      default:
        break;
    }
  }

  handledEmit() {
    this.handleEmit.emit(this.type);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ICONS,
  ICON_TYPE,
  VARIANT_BUTTTON,
  VARIANT_TYPE,
} from 'src/app/enums/global';

@NgModule({
  imports: [CommonModule],
  exports: [ButtonComponent],
  declarations: [ButtonComponent],
  providers: [],
})
export class ButtonModule {}
