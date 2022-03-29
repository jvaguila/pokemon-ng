import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PokemonIndexPage } from './pokemon/pages/pokemon-index/pokemon-index.page';
import { ButtonModule } from '../components/button/button.component';
import { InputModule } from '../components/input/input.component';
import { PokemonService } from './pokemon/services/pokemon.service';
import { TableDetailComponent } from './pokemon/components/table-detail/table-detail.component';
import { CreatePokemonComponent } from './pokemon/components/create-pokemon/create-pokemon.component';
import { SliderModule } from '../components/slider/slider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: PokemonIndexPage },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [
    PokemonIndexPage,
    TableDetailComponent,
    CreatePokemonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonModule,
    InputModule,
    SliderModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
  providers: [PokemonService],
})
export class PokemonsModule {}
