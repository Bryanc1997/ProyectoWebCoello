import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:51120/api/Usuarios';

  constructor(private http: HttpClient) {}

  login(cedula: string, contrasena: string): Observable<any> {
    const body = { Cedula: cedula, Contrasena: contrasena };
    return this.http.post(`${this.apiUrl}/Login`, body);
  }
}
