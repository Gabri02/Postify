import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://gorest.co.in/public/v2';
  token = '4fa2860a7000dc99c966ef194df4662299d56f3880f54e276cfa798838cc5c72';

  constructor(private http: HttpClient) {}

  signup(user: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );

    const url = `${this.baseUrl}/users`;
    return this.http.post(url, user, { headers });
  }
}
