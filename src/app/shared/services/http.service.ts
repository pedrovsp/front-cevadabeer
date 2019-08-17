import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export const API_URL = 'localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public loading = false;

  constructor(private httpClient: HttpClient) { }

  public doPost<T>(url: string, body: T): Observable<T> {
    this.loading = true;
    return this.httpClient.post<T>(API_URL + url, body).pipe(
      tap(
        success => {
          return success;
        },
        error => {
          console.log('Tratar erro', error);
        }
      ),
      finalize(() => this.loading = false)
    );
  }

  public doGet<T>(url: string, body?: T): Observable<T> {
    this.loading = true;
    return this.httpClient.get<T>(API_URL + url, body).pipe(
      tap(
        success => {
          return success;
        },
        error => {
          console.log('Tratar erro', error);
        }
      ),
      finalize(() => this.loading = false)
    );
  }

  public doPut<T>(url: string, body: T): Observable<T> {
    this.loading = true;
    return this.httpClient.put<T>(API_URL + url, body).pipe(
      tap(
        success => {
          return success;
        },
        error => {
          console.log('Tratar erro', error);
        }
      ),
      finalize(() => this.loading = false)
    );
  }

  public doDelete<T>(url: string, body?: T): Observable<T> {
    this.loading = true;
    return this.httpClient.delete<T>(API_URL + url, body).pipe(
      tap(
        success => {
          return success;
        },
        error => {
          console.log('Tratar erro', error);
        }
      ),
      finalize(() => this.loading = false)
    );
  }
}
