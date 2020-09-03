import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListOfJokesComponent } from './components/list-of-jokes/list-of-jokes.component';
import { JokeByIdComponent } from './components/joke-by-id/joke-by-id.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { AppMaterialModules } from './app-material.module';
@NgModule({
  declarations: [
    AppComponent,
    ListOfJokesComponent,
    JokeByIdComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    AppMaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
