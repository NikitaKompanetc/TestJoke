import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCallService } from 'src/app/services/api-call.service';
import { Joke } from 'src/app/models/joke';
@Component({
  selector: 'app-joke-by-id',
  templateUrl: './joke-by-id.component.html',
  styleUrls: ['./joke-by-id.component.scss']
})
export class JokeByIdComponent implements OnInit {
  objOfId;
  itemId: number;
  itemJoke: string;
  itemCategory: string;
  constructor(
    private activeRoute: ActivatedRoute,
    private api: ApiCallService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.api.getById(params.id).subscribe(res => {
        this.objOfId = res;
        this.itemId = this.objOfId.id;
        this.itemJoke = this.objOfId.joke;
        this.itemCategory = this.objOfId.categories;
      });
    });
  }
  returnMain(): void {
    this.router.navigate(['']);
  }
}
