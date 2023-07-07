import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private auth: AuthService) {}

  getUsers() {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.auth.getApiKey()}`
    );
    return this.http.get(`${this.apiUrl}/users`, { headers });
  }
}
