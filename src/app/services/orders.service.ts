import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {config} from '../info/conf';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) {
  }
  postSmallOrder(body): Observable<any> {
    return this.http.post(`${config.HOST}/smallOrder`, body);
  }
  postBigOrder(body): Observable<any> {
    return this.http.post(`${config.HOST}/order`, body);
  }

}
