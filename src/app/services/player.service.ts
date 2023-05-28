import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Player } from "../model/player.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  baseUrl = "http://localhost:3001/player";
  
  constructor( private http: HttpClient) { }

  create(player: Player): Observable<Player>{
    return this.http.post<Player>(this.baseUrl, player)
  }

  read(): Observable<Player[]>{
    return this.http.get<Player[]>(this.baseUrl)
  }

  readById(id: string): Observable<Player>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Player>(url)
  }

  update(player: Player): Observable<Player> {
    const url = `${this.baseUrl}/${player.id}`
    return this.http.put<Player>(url, player)
  }

  delete(id: string): Observable<Player> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Player>(url)
  }
}
