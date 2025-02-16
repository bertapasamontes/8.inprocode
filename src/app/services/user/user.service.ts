import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private apiUrl = 'http://localhost:5000/users'; // URL del backend

  // constructor(private http: HttpClient) {}

  // // Método para obtener la lista de usuarios desde el backend
  // getUsers(): Observable<any> {
  //   return this.http.get<any>(this.apiUrl);
  // }
}
