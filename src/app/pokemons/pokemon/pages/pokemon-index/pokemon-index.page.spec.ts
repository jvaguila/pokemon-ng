import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonIndexPage } from './pokemon-index.page';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { of } from 'rxjs';
import { IPokemon } from '../../models/pokemon.model';

const pokemons: IPokemon[] = [
  {
    id: 6650,
    name: 'Charmander',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    type: 'fire',
    hp: 50,
    attack: 50,
    defense: 50,
    idAuthor: 1,
    created_at: new Date('2022-03-15T16:51:59.585Z'),
    updated_at: new Date('2022-03-28T05:43:54.113Z'),
  },
  {
    id: 6672,
    name: 'Charizard 4',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
    type: 'fire',
    hp: 0,
    attack: 73,
    defense: 18,
    idAuthor: 1,
    created_at: new Date('2022-03-16T06:28:38.902Z'),
    updated_at: new Date('2022-03-28T14:43:18.442Z'),
  },
  {
    id: 6714,
    name: 'Pikachu',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    type: 'fire',
    hp: 0,
    attack: 82,
    defense: 52,
    idAuthor: 1,
    created_at: new Date('2022-03-17T04:11:25.311Z'),
    updated_at: new Date('2022-03-17T17:55:48.541Z'),
  },
  {
    id: 6715,
    name: 'Poke5',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png',
    type: 'fire',
    hp: 0,
    attack: 61,
    defense: 54,
    idAuthor: 1,
    created_at: new Date('2022-03-17T13:19:31.597Z'),
    updated_at: new Date('2022-03-18T22:10:09.309Z'),
  },
  {
    id: 6717,
    name: 'Yanma',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png',
    type: 'fire',
    hp: 50,
    attack: 50,
    defense: 50,
    idAuthor: 1,
    created_at: new Date('2022-03-17T21:34:35.788Z'),
    updated_at: new Date('2022-03-17T21:34:35.788Z'),
  },
  {
    id: 6718,
    name: 'Yanma2',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png',
    type: 'fire',
    hp: 50,
    attack: 50,
    defense: 50,
    idAuthor: 1,
    created_at: new Date('2022-03-17T21:34:44.096Z'),
    updated_at: new Date('2022-03-17T21:34:44.096Z'),
  },
  {
    id: 6720,
    name: 'Yanma4',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png',
    type: 'fire',
    hp: 100,
    attack: 100,
    defense: 100,
    idAuthor: 1,
    created_at: new Date('2022-03-17T21:34:55.278Z'),
    updated_at: new Date('2022-03-17T21:35:38.292Z'),
  },
  {
    id: 6742,
    name: 'pokemon 55555',
    image:
      'https://www.gratistodo.com/wp-content/uploads/2016/07/pokemon-wallpapers-2.png',
    type: 'fire',
    hp: 0,
    attack: 38,
    defense: 99,
    idAuthor: 1,
    created_at: new Date('2022-03-22T21:01:56.770Z'),
    updated_at: new Date('2022-03-22T21:02:24.246Z'),
  },
  {
    id: 6743,
    name: 'Charizar',
    image:
      'https://i.pinimg.com/736x/4f/65/57/4f6557c77bf0ffb7632af7ee668e9786--pokemon-eggs-plant-pokemon.jpg',
    type: 'water',
    hp: 100,
    attack: 33,
    defense: 56,
    idAuthor: 1,
    created_at: new Date('2022-03-25T13:28:44.724Z'),
    updated_at: new Date('2022-03-25T13:28:44.724Z'),
  },
  {
    id: 6745,
    name: 'sobble',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/816.png',
    type: 'water',
    hp: 51,
    attack: 58,
    defense: 53,
    idAuthor: 1,
    created_at: new Date('2022-03-27T01:47:50.318Z'),
    updated_at: new Date('2022-03-27T01:47:50.318Z'),
  },
  {
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
  },
];

const PokemonServiceMock = {
  getPokemons: () => of(pokemons),
  deletePokemon: (data: IPokemon) => {
    const dataToShow: IPokemon[] = pokemons.filter((m) => m.id !== data.id);
    return of(dataToShow);
  },
};

describe('PokemonIndexPage', () => {
  let component: PokemonIndexPage;
  let fixture: ComponentFixture<PokemonIndexPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonIndexPage],
      imports: [HttpClientTestingModule],
      providers: [{ provide: PokemonService, useValue: PokemonServiceMock }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getPokemons get all pokemons', () => {
    component.getPokemons();
    expect(component.allPokemons).toBe(pokemons);
  });

  it('handleOptionTable delete pokemon', () => {
    const event = { data: pokemons[0], type: 'DELETE' };
    component.allPokemons = pokemons;
    fixture.detectChanges();
    component.handleOptionTable(event);
    const dataToShow: IPokemon[] = pokemons.filter(
      (m) => m.id !== event.data.id
    );
    expect(component.pokemons).toEqual(dataToShow);
  });
});
