import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = "http://localhost:8080/auth"

  constructor(private http: HttpClient) { }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        // Salvar token JWT no armazenamento local após o login bem-sucedido
        localStorage.setItem('token', response.token);
      })
    );
  }

  logout(): void {
    // Remover token JWT do armazenamento local após o logout
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    // Verificar se o token JWT está presente no armazenamento local para determinar se o usuário está autenticado
    return !!localStorage.getItem('token');
  }
}