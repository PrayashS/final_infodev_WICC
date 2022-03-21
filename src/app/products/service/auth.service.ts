import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  
  saveToken(token:string){
    localStorage.setItem('token',token);
  }

  getToken():string|null{
    return localStorage.getItem('token');
  }
  removeToken(){
    localStorage.removeItem('token');
  }
  checkToken():boolean{
    let token = localStorage.getItem('token')
    if(token)
    {
      return true;
    }
    return false;
  }

  userLogin(loginForm:any):Observable<any>{
    const baseUrl="http://localhost:3000/login";
    return this.httpClient.post(baseUrl, loginForm);
  }
  userRegister(registerForm:any):Observable <any>{
    const baseUrl="http://localhost:3000/register";
    return this.httpClient.post(baseUrl, registerForm);
  }
  isAdmin(){
    const baseUrl="http://localhost:3000/profile"+"/isadmin/";
    return this.httpClient.get(baseUrl)
  }

adminOrNot(id:any):Observable<any>{
    const baseUrl="http://localhost:3000/register/";
    return this.httpClient.get(baseUrl+id)
  }




}

