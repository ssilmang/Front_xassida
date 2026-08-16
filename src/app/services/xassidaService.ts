import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Response } from '../core/models/response-interface';
import { XassidaInterface } from '../core/models/xassida-interface';

@Injectable({
  providedIn: 'root',
})
export class XassidaService {
  _http = inject(HttpClient);
  getXassida():Observable<Response<XassidaInterface[]>> {
    return this._http.get<Response<XassidaInterface[]>>(`${environment.apiUrl}xassida`);
  }
  findXassidaById(id:number):Observable<Response<XassidaInterface>> {
    return this._http.get<Response<XassidaInterface>>(`${environment.apiUrl}xassida/${id}`);
  }
}
