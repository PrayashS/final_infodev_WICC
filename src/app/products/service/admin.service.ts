import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { dataModel } from 'src/app/dashboard/admin-dashboard/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private http : HttpClient) { }

  
  // showUser():Observable<dataModel>{
  //   const baseUrl="http://localhost:3000/register";
  //   return this.http.get<dataModel>(baseUrl);
  // }
  // deleteData(id : number){
  //   return this.http.delete<any>("http://localhost:3000/register/"+id)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }
  addData(data : any){
    return this.http.post<any>("http://localhost:3000/register", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getData(){
    return this.http.get<any>("http://localhost:3000/register")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateData(id: any, data:any){
    return this.http.put<any>("http://localhost:3000/register/" +id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteData(id : number){
    return this.http.delete<any>("http://localhost:3000/register/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}

