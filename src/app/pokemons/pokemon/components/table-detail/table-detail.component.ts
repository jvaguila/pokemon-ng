import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IPokemon } from '../../models/pokemon.model';
import { ICONS, VARIANT_BUTTTON } from '../../../../enums/global';

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.scss'],
})
export class TableDetailComponent implements OnInit {
  @Input() pokemons: IPokemon[] = [];
  @Output() handleEmit: EventEmitter<any> = new EventEmitter();
  icons = ICONS;
  variant = VARIANT_BUTTTON;

  constructor() {}

  ngOnInit(): void {}

  handleValue(data: IPokemon, event: string) {
    this.handleEmit.emit({ data, type: event });
  }
}
