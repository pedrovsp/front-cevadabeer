import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private _loading: Subject<boolean> = new Subject();
  public loading$: Observable<boolean>;

  constructor() {
    this.loading$ = this._loading.asObservable();
  }

  setLoading(loading: boolean) {
    this._loading.next(loading);
  }

}
