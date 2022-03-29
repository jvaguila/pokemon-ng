import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICONS } from '../../../../enums/global';
import { IPokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.scss'],
})
export class CreatePokemonComponent implements OnInit {
  @Input() dataInitial?: IPokemon;
  @Output() handleEmit: EventEmitter<any> = new EventEmitter();
  icons = ICONS;

  data?: IPokemon;

  myForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    this.hasInitialData();
  }

  hasInitialData() {
    if (this.dataInitial) {
      this.myForm.controls.name.setValue(this.dataInitial?.name);
      this.myForm.controls.image.setValue(this.dataInitial?.image);
      this.myForm.controls.attack.setValue(this.dataInitial?.attack);
      this.myForm.controls.defense.setValue(this.dataInitial?.defense);
    }
  }

  createForm() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],
      attack: ['', [Validators.required]],
      defense: ['', [Validators.required]],
    });
  }

  changeValueSlider(controlForm: string, event: any) {
    this.myForm.controls[controlForm].setValue(event);
  }

  emit(event: any) {
    if (event === ICONS.SAVE) {
      if (this.dataInitial) {
        this.dataInitial.name = this.myForm.value.name;
        this.dataInitial.image = this.myForm.value.image;
        this.dataInitial.attack = this.myForm.value.attack;
        this.dataInitial.defense = this.myForm.value.defense;
        this.dataInitial.updated_at = new Date();
        this.handleEmit.emit({ data: this.dataInitial, type: ICONS.EDIT });
      } else {
        this.data = {
          name: this.myForm.value.name,
          image: this.myForm.value.image,
          type: 'fire',
          attack: this.myForm.value.attack,
          defense: this.myForm.value.defense,
          hp: 100,
          idAuthor: 1,
          created_at: new Date(),
          updated_at: new Date(),
        };
        this.handleEmit.emit({ data: this.data, type: event });
      }
    }
  }
}
