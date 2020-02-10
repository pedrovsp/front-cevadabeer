import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { Beer } from '../models/beer.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'

const RECIPES_URL = '/cerveja'

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private httpService: HttpService) { }

  getRecipes(): Observable<Beer[]> {
    return this.httpService.doGet<Beer[]>(RECIPES_URL);
  }
}
