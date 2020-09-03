import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfJokesComponent } from './components/list-of-jokes/list-of-jokes.component';
import { JokeByIdComponent } from './components/joke-by-id/joke-by-id.component';

const routes: Routes = [
  {
    path: '',
    component: ListOfJokesComponent
  },
  {
    path: ':id',
    component: JokeByIdComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
