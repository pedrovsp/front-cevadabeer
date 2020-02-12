import { Component, OnInit } from '@angular/core';
import { LoadingService } from './shared/services/loading.service';
import { ObservableLike, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cevadabeer-front';
  loading: Observable<boolean>;
  constructor(public loadingService: LoadingService) {

  }

}
