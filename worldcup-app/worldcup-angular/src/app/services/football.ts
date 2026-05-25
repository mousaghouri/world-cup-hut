import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  private apiKey = '498ce2105ea24581ae3a5748102b87a2';
  private apiHost = 'v3.football.api-sports.io';
  private baseUrl = 'https://localhost:7230';

  private headers = new HttpHeaders({
    'x-rapidapi-key': this.apiKey,
    'x-rapidapi-host': this.apiHost
  });

  constructor(private http: HttpClient) {}

  // Get top scorers for World Cup 2022 (has complete data)
  getTopScorers(): Observable<any> {
    const cached = localStorage.getItem('wc_topscorers');
    if (cached) {
      return of(JSON.parse(cached));
    }
    return this.http.get(
      `${this.baseUrl}/players/topscorers?league=1&season=2022`,
      { headers: this.headers }
    ).pipe(
      map((data: any) => {
        localStorage.setItem('wc_topscorers', JSON.stringify(data));
        return data;
      }),
      catchError(err => {
        console.error('API error:', err);
        return of(null);
      })
    );
  }

  // Get all World Cup 2026 teams
  getTeams(): Observable<any> {
    const cached = localStorage.getItem('wc_teams');
    if (cached) {
      return of(JSON.parse(cached));
    }
    return this.http.get(
      `${this.baseUrl}/teams?league=1&season=2026`,
      { headers: this.headers }
    ).pipe(
      map((data: any) => {
        localStorage.setItem('wc_teams', JSON.stringify(data));
        return data;
      }),
      catchError(err => {
        console.error('API error:', err);
        return of(null);
      })
    );
  }

  // Get World Cup 2026 matches
  getMatches(): Observable<any> {
    const cached = localStorage.getItem('wc_matches');
    if (cached) {
      return of(JSON.parse(cached));
    }
    return this.http.get(
      `${this.baseUrl}/fixtures?league=1&season=2026`,
      { headers: this.headers }
    ).pipe(
      map((data: any) => {
        localStorage.setItem('wc_matches', JSON.stringify(data));
        return data;
      }),
      catchError(err => {
        console.error('API error:', err);
        return of(null);
      })
    );
  }

  // Get World Cup 2026 standings
  getStandings(): Observable<any> {
    const cached = localStorage.getItem('wc_standings');
    if (cached) {
      return of(JSON.parse(cached));
    }
    return this.http.get(
      `${this.baseUrl}/standings?league=1&season=2026`,
      { headers: this.headers }
    ).pipe(
      map((data: any) => {
        localStorage.setItem('wc_standings', JSON.stringify(data));
        return data;
      }),
      catchError(err => {
        console.error('API error:', err);
        return of(null);
      })
    );
  }
}