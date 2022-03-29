import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICONS } from 'src/app/enums/global';
import { IPokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-index',
  templateUrl: './pokemon-index.page.html',
  styleUrls: ['./pokemon-index.page.scss'],
})
export class PokemonIndexPage implements OnInit, OnDestroy {
  showInterface = false;
  icons = ICONS;
  subscriptions: Subscription[] = [];
  pokemonToEdit?: IPokemon;

  showCreatePokemon = false;

  pokemons: IPokemon[] = [];
  allPokemons: IPokemon[] = [];

  constructor(private _pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.map((s) => {
        s.unsubscribe();
      });
    }
  }

  searchPokemon(event: string) {
    this.pokemons = this.allPokemons.filter((m) =>
      m.name.toLowerCase().includes(event.toLowerCase())
    );
  }

  getPokemons() {
    this._pokemonService.getPokemons().subscribe((res) => {
      this.pokemons = res;
      this.allPokemons = this.pokemons;
      this.showInterface = true;
    });
  }

  handleOptionTable(event: any) {
    if (event.type === ICONS.EDIT) {
      this.pokemonToEdit = event.data;
      this.showCreatePokemon = true;
    } else if (event.type === ICONS.DELETE) {
      this._pokemonService.deletePokemon(event.data).subscribe((res) => {
        this.pokemons = this.pokemons.filter((m) => m.id !== event.data.id);
        this.allPokemons = this.pokemons;
      });
    }
  }

  add() {
    this.showCreatePokemon = true;
  }

  save(event: any) {
    if (event.type === ICONS.SAVE) {
      this._pokemonService.savePokemon(event.data).subscribe(
        (res) => {
          this.pokemons.push(res);
          this.showCreatePokemon = false;
        },
        (err) => {
          console.log(err);
        }
      );
    } else if (event.type === ICONS.EDIT) {
      this._pokemonService.updatePokemon(event.data).subscribe((res) => {
        const index = this.pokemons.findIndex((m) => m.id === event.data.id);
        this.pokemons[index] = event.data;
        this.allPokemons = this.pokemons;
      });
    }
    this.showCreatePokemon = false;
  }
}
