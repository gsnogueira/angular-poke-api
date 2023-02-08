import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeListService {

  constructor(private http: HttpClient) { }
  getList(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/')
    .pipe(
      tap(console.log)
    )
  }
}
