import { Injectable } from '@angular/core';
import {config} from '../info/conf';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseInfoService {

  constructor(private http: HttpClient) { }
  getHouses(): Observable<any>{
    return this.http.get(`${config.HOST}/house`);
  }

  getAdd(): Observable<any>{
    return this.http.get(`${config.HOST}/add`);
  }

  getHousesById(id): Observable<any>{
    return this.http.get(`${config.HOST}/house/${id}`);
  }

}
