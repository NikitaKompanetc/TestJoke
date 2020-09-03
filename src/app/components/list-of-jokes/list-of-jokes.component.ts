import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiCallService } from 'src/app/services/api-call.service';
import { JokesService } from 'src/app/services/jokes.service';
import { Joke } from 'src/app/models/joke';
import { skipWhile } from 'rxjs/operators';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-list-of-jokes',
  templateUrl: './list-of-jokes.component.html',
  styleUrls: ['./list-of-jokes.component.scss']
})
export class ListOfJokesComponent implements OnInit, OnDestroy {
  listOfJokes: Array<Joke>;
  listOfJokesTemp;
  numberOfPages = 0;
  currentPage = 1;

  subscriptionJokes: Subscription;
  constructor(
    private router: Router,
    private api: ApiCallService,
    private jokeService: JokesService
  ) {
    this.api.getAllData().subscribe((res: any) => {
      this.jokeService.setJokes(res);
    });
  }

  ngOnInit(): void {
    this.subscriptionJokes = this.jokeService.$Jokes.pipe(skipWhile(el => el.length === 0)).subscribe(element => {
      this.listOfJokes = element;
      this.listOfJokesTemp = element.slice(0, 10);
      this.numberOfPages = Math.ceil(element.length / 10);
    });
  }

  ngOnDestroy(): void {
    this.subscriptionJokes.unsubscribe();
  }
  openById(id: number): void {
    this.router.navigate([`/${id}`]);
  }
  onPageChane(number): void {
    this.currentPage = number;
    this.listOfJokesTemp = this.listOfJokes.slice((number - 1) * 10, number * 10);
  }
  search(data: string): void {
    this.listOfJokes = this.jokeService.getJokes.filter(el => el.joke.toLowerCase().includes(data.toLowerCase()));
    this.numberOfPages = Math.ceil(this.listOfJokes.length / 10);

  }
}
