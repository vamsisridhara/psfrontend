import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PeopleSearchViewModel } from '../viewmodels/peoplesearch-model';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { }
  search(input): Observable<PeopleSearchViewModel[]> {
    let url = '';
    if (input) {
       url = `http://localhost/peoplesearchbackend/api/values/${input}`;
    } else {
      url = `http://localhost/peoplesearchbackend/api/values/getall`;
    }
    return this.http.get<PeopleSearchViewModel[]>(url)
        .pipe(
          tap((response: PeopleSearchViewModel[]) => {
            if (response && response.length > 0) {
              return response
                .map(user => new PeopleSearchViewModel(user.ID, user.FirstName,
                  user.LastName,
                  user.Address, user.Age,
                  user.Interests, user.PictureUrl));
            }
          })
        );
  }
}

