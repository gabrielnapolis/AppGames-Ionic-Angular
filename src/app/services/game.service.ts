import { Game } from './../model/game.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  baseUrl = "http://localhost:3001/game";

  constructor( private http: HttpClient) { }

  create(game: Game): Observable<Game>{
    return this.http.post<Game>(this.baseUrl, game)
  }

  read(): Observable<Game[]>{
    return this.http.get<Game[]>(this.baseUrl)
  }

  readById(id: string): Observable<Game>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Game>(url)
  }

  update(game: Game): Observable<Game> {
    const url = `${this.baseUrl}/${game.id}`
    return this.http.put<Game>(url, game)
  }

  delete(id: string): Observable<Game> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Game>(url)
  }
}
