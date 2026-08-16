import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Event } from '../shared/data/mockData';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EvenementService {
  _http = inject(HttpClient)

  getEvenement():Observable<Event[]>
  {
    return this._http.get<Event[]>(`${environment.apiUrl}evenement`);
  }
}
