import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5000/api/users';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUsersByRole(role: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/role/${role}`);
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  updateUser(id: string, userData: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, userData);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
} 