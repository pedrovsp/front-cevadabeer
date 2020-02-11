import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, finalize, startWith, delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingService } from './loading.service';

export const API_URL = 'https://glacial-cliffs-84306.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
      private httpClient: HttpClient,
      private loadingService: LoadingService) { }

  public doPost<T>(url: string, body: T): Observable<T> {
    this.loadingService.setLoading(true);
    return this.httpClient.post<T>(API_URL + url, body).pipe(
      tap(
        success => {
          return success;
        },
        error => {
          console.log('Tratar erro', error);
        }
      ),
      finalize(() => this.loadingService.setLoading(false))
    );
  }

  public doGet<T>(url: string, body?: T): Observable<T> {
    this.loadingService.setLoading(true);
    return this.httpClient.get<T>(API_URL + url).pipe(
      tap(
        success => {
          return success;
        },
        error => {
          console.log('Tratar erro', error);
        }
      ),
      finalize(() => this.loadingService.setLoading(false))
    );
  }

  public doPut<T>(url: string, body: T): Observable<T> {
    this.loadingService.setLoading(true);
    return this.httpClient.put<T>(API_URL + url, body).pipe(
      tap(
        success => {
          return success;
        },
        error => {
          console.log('Tratar erro', error);
        }
      ),
      finalize(() => this.loadingService.setLoading(false))
    );
  }

  public doDelete<T>(url: string, body?: T): Observable<T> {
    this.loadingService.setLoading(true);
    return this.httpClient.delete<T>(API_URL + url, body).pipe(
      tap(
        success => {
          return success;
        },
        error => {
          console.log('Tratar erro', error);
        }
      ),
      finalize(() => this.loadingService.setLoading(false))
    );
  }

  getHeaders() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return headers;
  }
}
