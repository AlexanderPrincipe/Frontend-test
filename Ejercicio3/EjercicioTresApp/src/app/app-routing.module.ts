import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesMarvelComponent } from './heroes-marvel/heroes-marvel.component';

const routes: Routes = [
  {path: '', redirectTo: '/heroes', pathMatch: 'full'},
  {path: 'heroes', component: HeroesMarvelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
