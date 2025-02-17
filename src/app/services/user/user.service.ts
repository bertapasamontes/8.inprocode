import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/users.js';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private myAppUrl: String;
  private myApiUrl: String; // URL del backend

  constructor(private http: HttpClient) {
    this.myAppUrl = 'http://localhost:4200/';
    this.myApiUrl ='users';
  }

  // Método para obtener la lista de usuarios desde el backend
  // getUsers(): Observable<any> {
  //   return this.http.get<any>(this.apiUrl);
  // }

  getListUsers(): Observable<User[]>{
    return this.http.get<User[]>('${this.myAppUrl}${this.myApiUrl}');
  }
}
