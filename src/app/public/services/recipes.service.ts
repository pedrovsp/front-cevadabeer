import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { Beer } from '../models/beer.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import { Production } from '../models/production.model';
import { Igredient } from '../models/ingridient.model';

const RECIPES_URL = '/cerveja';
const PRODUCTION_URL = '/producao';
const INGREDIENTS_URL = '/ingrediente'

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private httpService: HttpService) { }

  getRecipes(): Observable<Beer[]> {
    return this.httpService.doGet<Beer[]>(RECIPES_URL);
  }

  getProductions(): Observable<Production[]> {
    return this.httpService.doGet<Production[]>(PRODUCTION_URL);
  }

  getIngredients(): Observable<Igredient[]> {
    return this.httpService.doGet<Igredient[]>(INGREDIENTS_URL);
  }
}
