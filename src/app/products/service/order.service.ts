import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:3000/order"
  
  postOrder(uid:any,pid:any)
  {
    const data ={
      userId:uid,
      productId:pid,
      quantity:1,
      status:"pending"
    }
    return this.http.post(this.url,data)
  }
}
