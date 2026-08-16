import { HttpClient } from '@angular/common/http';
import { inject,Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { EcrivainWithXassidas, EcrivainWithXassidasDetail } from '../shared/data/mockData';

@Injectable({
  providedIn: 'root',
})
export class Biographie {
  _http = inject(HttpClient);
  constructor() {}

  ecrivainsWithXassidas():Observable<EcrivainWithXassidas[]> {
    return this._http.get<EcrivainWithXassidas[]>(`${environment.apiUrl}biographie/ecrivains/xassidas`);
  }
  ecrivainDetail(id:string):Observable<any> {
    return this._http.get<any>(`${environment.apiUrl}biographie/ecrivain/xassida/${id}`);
  }
  getBiographie():Observable<any>{
    return this._http.get<any>(`${environment.apiUrl}biographie`);
  }
  getBiographieById(id:string):Observable<any>{
    return this._http.get<any>(`${environment.apiUrl}biographie/${id}`);
  }
}
