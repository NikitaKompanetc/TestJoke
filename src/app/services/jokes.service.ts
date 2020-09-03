import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Joke } from '../models/joke';
import { ApiCallService } from './api-call.service';
@Injectable({
  providedIn: 'root'
})
export class JokesService {
  private Jokes = new BehaviorSubject<Array<Joke>>([]);
  public $Jokes = this.Jokes.asObservable();
  constructor() { }
  setJokes(jokes: Array<Joke>): void {
    this.Jokes.next(jokes);
  }
  get getJokes(): Array<Joke> {
    return this.Jokes.getValue();
  }
}
