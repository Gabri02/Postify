import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://gorest.co.in/public/v2';
  private apiKey: string = '';

  constructor(private http: HttpClient) {}

  signup(user: any, apiKey: string): Observable<any> {
    const headers = this.createHeaders(apiKey);

    const url = `${this.baseUrl}/users`;
    return this.http.post(url, user, { headers }).pipe(
      catchError((error) => {
        // Gestione degli errori
        console.log('Errore durante la registrazione:', error);
        return throwError(error);
      })
    );
  }

  login(apiKey: string): Observable<any> {
    const headers = this.createHeaders(apiKey);

    const url = `${this.baseUrl}/users`;
    return this.http.get(url, { headers }).pipe(
    );
  }

  private createHeaders(apiKey: string): HttpHeaders {
    this.apiKey = apiKey;

    return new HttpHeaders().set('Authorization', `Bearer ${this.apiKey}`);
  }
  getApiKey(): string {
    return this.apiKey;
  }
}
