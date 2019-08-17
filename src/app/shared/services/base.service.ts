import { Observable } from 'rxjs';

export interface BaseService {

  find<T>(): Observable<T[]>;
  findById<T>(id: number): Observable<T>;
  create<T>(body: T): Observable<T>;
  save<T>(body: T): Observable<T>;
  remove<T>(id: number): Observable<void>;
}
