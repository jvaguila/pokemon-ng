import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePokemonComponent } from './create-pokemon.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';

const pokemon = {
  id: 6765,
  name: 'zapdos',
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
  type: 'fire',
  hp: 50,
  attack: 50,
  defense: 50,
  idAuthor: 1,
  created_at: new Date('2022-03-28T07:22:16.368Z'),
  updated_at: new Date('2022-03-28T13:52:59.856Z'),
};

describe('CreatePokemonComponent', () => {
  let component: CreatePokemonComponent;
  let fixture: ComponentFixture<CreatePokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePokemonComponent],
      providers: [{ provide: FormBuilder, useValue: new FormBuilder() }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the form must be initialized', () => {
    component.dataInitial = pokemon;
    fixture.detectChanges();
    component.hasInitialData();
    expect(component.myForm.value.name).toEqual(pokemon.name);
    expect(component.myForm.value.image).toEqual(pokemon.image);
    expect(component.myForm.value.attack).toEqual(pokemon.attack);
    expect(component.myForm.value.defense).toEqual(pokemon.defense);
  });

  it('the form must be initialized', () => {
    component.dataInitial = pokemon;
    fixture.detectChanges();
    let value;
    component.handleEmit.subscribe((res) => {
      value = res;
    });
    component.emit('SAVE');
    console.log(value);
    expect(value).toEqual({ data: pokemon, type: 'EDIT' });
  });
});
