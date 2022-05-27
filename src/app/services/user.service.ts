import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
apiUrl =  'https://sheet.best/api/sheets/96f9f480-61a2-4761-bedd-dd790416a34c'
httpOptions = {
  headers: new HttpHeaders({
    'Content-type' : 'application/json',
  
  })
}  
constructor(private httpClient : HttpClient) { }

  //retorna a lista de usuarios
  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl)
  }

  //salva usuario no banco
  postUser(user: User) : Observable<User>{
    return this.httpClient.post<User>(this.apiUrl,user, this.httpOptions);
  }

  //exclui o usuário do banco
  deleteUser(id : number ) : Observable<User>{
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`)
  }

  //edita usuario 
  updateUser(id: string, user : User) : Observable<User>{
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, user, this.httpOptions);
  }

  //lista usuario unico
  getUser(id:string) : Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`)
  }
}
