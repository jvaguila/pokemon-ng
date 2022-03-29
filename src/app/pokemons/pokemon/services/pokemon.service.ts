import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon } from '../models/pokemon.model';

@Injectable()
export class PokemonService {
  static URL = 'https://pokemon-pichincha.herokuapp.com/pokemons';
  static ID_AUTHOR = 'idAuthor=1';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<IPokemon[]> {
    return this.http.get<IPokemon[]>(
      `${PokemonService.URL}/?${PokemonService.ID_AUTHOR}`
    );
  }

  savePokemon(data: IPokemon): Observable<IPokemon> {
    return this.http.post<IPokemon>(
      `${PokemonService.URL}/?${PokemonService.ID_AUTHOR}`,
      data
    );
  }

  updatePokemon(data: IPokemon): Observable<IPokemon> {
    return this.http.put<IPokemon>(`${PokemonService.URL}/${data.id}`, data);
  }

  deletePokemon(data: IPokemon): Observable<any> {
    return this.http.delete<any>(`${PokemonService.URL}/${data.id}`);
  }
}
