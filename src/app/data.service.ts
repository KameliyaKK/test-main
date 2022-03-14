import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpParams, HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
  ) {

  }

  /**
   * получение данных с апи
   */
  getData(): Observable<any> {
    const params = new HttpParams({
    });
    return this.http.get('http://localhost:8881/getdata', {params, responseType: 'json'})
      .pipe(
        map(data => {
          return data;
        }),
      );
  }


  /*
  Отправка данных в апи
   */
  SendDataForm(data: any): Observable<any> {

    /*
    //формирование урл параметров через fromObject
    const params = new HttpParams({
      fromObject: {
        model: 'cam',
        method: 'getArchive',
        params: '{"stream":"1"}'
      }
    });
    return this.http.get('http://localhost:8881', {params, responseType: 'json'})
      .pipe(
        map(data => {
          return data;
        }),
      );
    */

    /*
    //сами формируем урл под наш апи
    const params = new HttpParams({
    });
    const url = 'data/'+data.name+'/'+data.tel+'/'+data.adres;
    return this.http.get('http://localhost:8881/'+url, {params, responseType: 'json'})
      .pipe(
        map(data => {
          return data;
        }),
      );
    */

  /*
    POST отправка формы
   */
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    return this.http.post('http://localhost:8881/data', data, httpOptions)
      .pipe(
        map(data => {
          return data;
        }),
      );



  }

}
