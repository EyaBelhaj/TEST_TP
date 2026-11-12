import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL = '/api/user';
  constructor(private  httpClient:HttpClient) { }

  getAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.baseURL + '/all');
  }

  deleteUser(id:string):Observable<boolean>{
    return this.httpClient.delete<boolean>(this.baseURL + '/delete/' + id);
  }

  addUser(firstname:string,lastname:string):Observable<User>{
    const body = { firstName: firstname, lastName: lastname };
    return this.httpClient.post<User>(this.baseURL + '/add', body);
  }
}
