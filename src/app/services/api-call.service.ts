import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  allData = 'http://api.icndb.com/jokes/';
  constructor(
    private httpClient: HttpClient
  ) { }
  public getAllData(): Observable<object> {
    return this.httpClient.get(this.allData + 'random/1000').pipe(map((el: any) => el.value));
  }
  public getById(id: string): Observable<object> {
    return this.httpClient.get(this.allData + `${id}`).pipe(map((el: any) => el.value));
  }
}
