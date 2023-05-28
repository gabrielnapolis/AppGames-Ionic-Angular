import { Match } from './../model/match.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  baseUrl = "http://localhost:3001/match";

  constructor( private http: HttpClient) { }

  create(match: Match): Observable<Match>{
    return this.http.post<Match>(this.baseUrl, match)
  }

  read(): Observable<Match[]>{
    return this.http.get<Match[]>(this.baseUrl)
  }

  readById(id: string): Observable<Match>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Match>(url)
  }

  update(match: Match): Observable<Match> {
    const url = `${this.baseUrl}/${match.id}`
    return this.http.put<Match>(url, match)
  }

  delete(id: string): Observable<Match> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Match>(url)
  }
}
