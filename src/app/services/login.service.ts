import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { } 

  login(username: string, password: string): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/login`, { username, password });
  }
}